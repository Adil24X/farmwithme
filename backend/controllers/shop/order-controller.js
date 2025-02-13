const { paypal, paypalsdk } = require("../../helpers/paypal");
const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

// const createOrder = async (req, res) => {
//   try {
//     const {
//       userId,
//       cartItems,
//       addressInfo,
//       orderStatus,
//       paymentMethod,
//       paymentStatus,
//       totalAmount,
//       orderDate,
//       orderUpdateDate,
//       paymentId,
//       payerId,
//       cartId,
//     } = req.body;

//     const create_payment_json = {
//       intent: "CAPTURE",
//       payer: {
//         payment_method: "paypal",
//       },
//       redirect_urls: {
//         return_url: "http://localhost:5173/shop/paypal-return",
//         cancel_url: "http://localhost:5173/shop/paypal-cancel",
//       },
//       transactions: [
//         {
//           // const exchangeRate =0.012;
//           item_list: {
//             items: cartItems.map((item) => ({
//               name: item.title,
//               sku: item.productId,
//               price: (item.price * 0.012).toFixed(2),
//               currency: "USD",
//               quantity: item.quantity,
//             })),
//           },
//           amount: {
//             currency: "USD",
//             total: (totalAmount * 0.012).toFixed(2),
//           },
//           description: "description",
//         },
//       ],
//     };


//     //chatgpt code
//     const request = new paypalsdk.orders.OrdersCreateRequest();
//     request.prefer("return=representation");
//     request.requestBody(create_payment_json);

//     try {
//       const response = await paypal.execute(request);
//       const paymentInfo = response.result; // Extracting payment details

//       // Handle success
//       console.log("Payment Created:", paymentInfo);
//     } catch (error) {
//       console.error("PayPal Order Creation Error:", error);
//       // Handle error
//     }


//     // paypal.payment.create(create_payment_json, async (error, paymentInfo) => {
//     //   if (error) {
//     //     console.log(error);

//     //     return res.status(500).json({
//     //       success: false,
//     //       message: "Error while creating paypal payment",
//     //     });
//     //   } else {
//         const newlyCreatedOrder = new Order({
//           userId,
//           cartId,
//           cartItems,
//           addressInfo,
//           orderStatus,
//           paymentMethod,
//           paymentStatus,
//           totalAmount,
//           orderDate,
//           orderUpdateDate,
//           paymentId,
//           payerId,
//         });

//         await newlyCreatedOrder.save();

//         const response = await paypal.execute(request);
//         const paymentInfo = response.result; // Extracting payment details

//         const approvalURL = paymentInfo.links.find(
//           (link) => link.rel === "approval_url"
//         ).href;

//         res.status(201).json({
//           success: true,
//           approvalURL,
//           orderId: newlyCreatedOrder._id,
//         });
//     //   }
//     // });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured!",
//     });
//   }
// };







const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,
      cartId,
    } = req.body;

    // Convert INR to USD (Assumed conversion rate: 0.012)
    const exchangeRate = 0.012;
    
    // Calculate item total dynamically
    let calculatedItemTotal = 0;

    const items = cartItems.map((item) => {
      const itemPrice = (item.price * exchangeRate).toFixed(2);
      const totalItemPrice = (itemPrice * item.quantity).toFixed(2);
      calculatedItemTotal += parseFloat(totalItemPrice);

      return {
        name: item.title,
        sku: item.productId,
        unit_amount: {
          currency_code: "USD",
          value: itemPrice,
        },
        quantity: item.quantity,
      };
    });

    // Ensure total amount is calculated correctly
    calculatedItemTotal = calculatedItemTotal.toFixed(2);

    const request = new paypalsdk.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: calculatedItemTotal, // Total amount matches sum of items
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: calculatedItemTotal,
              },
            },
          },
          items,
        },
      ],
      application_context: {
        return_url: "http://localhost:5173/shop/paypal-return",
        cancel_url: "http://localhost:5173/shop/paypal-cancel",
      },
    });

    // Execute the PayPal order creation request
    const response = await paypal.execute(request);
    const paymentInfo = response.result;

    // Save order details in database
    const newlyCreatedOrder = new Order({
      userId,
      cartId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,
      paymentId: paymentInfo.id, // Store PayPal order ID
    });

    await newlyCreatedOrder.save();

    // Extract the approval URL for frontend redirection
    const approvalURL = paymentInfo.links.find(
      (link) => link.rel === "approve"
    )?.href;

    res.status(201).json({
      success: true,
      approvalURL,
      orderId: newlyCreatedOrder._id,
    });
  } catch (e) {
    console.error("PayPal Order Creation Error:", e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};






const capturePayment = async (req, res) => {
  try {
    const { paymentId, payerId, orderId } = req.body;

    let order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order can not be found",
      });
    }

    order.paymentStatus = "paid";
    order.orderStatus = "confirmed";
    order.paymentId = paymentId;
    order.payerId = payerId;

    for (let item of order.cartItems) {
      let product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Not enough stock for this product ${product.title}`,
        });
      }

      product.totalStock -= item.quantity;

      await product.save();
    }

    const getCartId = order.cartId;
    await Cart.findByIdAndDelete(getCartId);

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order confirmed",
      data: order,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ userId });

    if (!orders.length) {
      return res.status(404).json({
        success: false,
        message: "No orders found!",
      });
    }

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = {
  createOrder,
  capturePayment,
  getAllOrdersByUser,
  getOrderDetails,
};
