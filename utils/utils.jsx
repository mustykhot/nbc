import { createClient } from "contentful";

export const accordionList = [
  {
    id: 1,
    title: "Create a business website.",
    link: "/explore/feature/business-website",
    content:
      "Set up your own business website in 60 seconds and display products for sale.",
  },
  {
    id: 2,
    title: "Issue Invoices & Send Receipts.",
    link: "/explore/feature/invoices-and-receipts",
    content:
      "Create invoices for customers and send them receipts with the Bumpa app.",
  },
  {
    id: 3,
    title: "Record Sales, Expenses & Customer Information.",
    link: "/explore/feature/record-sales",
    content:
      "Record all sales, expenses, and customer information securely on the cloud.",
  },
  {
    id: 4,
    title: "Send messages to Customers.",
    link: "/explore/feature/messaging",
    content:
      "Retain customers by sending them bulk SMS and emails on your Bumpa app.",
  },
  {
    id: 5,
    title: "Receive business report.",
    link: "/explore/feature/analytics",
    content:
      "Get a detailed, financial report of your business performance every month.",
  },
  {
    id: 6,
    title: "Meta Integration.",
    type: "blank",
    link: "https://getbumpa.com/meta/",
    content: " Receive Instagram DMs on Bumpa and sell 5x faster on Instagram.",
  },
];

export const FaqList = {
  general: [
    {
      id: 1,
      title: "What is Bumpa all about?",
      content:
        "Bumpa is an app that allows you to manage your business efficiently across various platforms ( online and physical store). It helps to track sales you make offline (physical sale) and various channels online like WhatsApp, Facebook, Twitter, Instagram, etc.   Signing up on the app offers you access to create and customise a free business website to display your  products and accept payments from customers without stress at any time.  With the app you can send invoices, receipts, request for payments from debtors, send  SMS and emails, reply to your instagram dms, create discount codes and coupons.  It also gives detailed analytics of your business like total sales, expenses,shipping spend , best performing products,  least performing products, top customers and a lot more.",
    },
    {
      id: 2,
      title: "What can I sell on Bumpa? ",
      content: "You can sell anything on Bumpa as long as it is legal.",
    },
    {
      id: 3,
      title: "Can I advertise my products on Bumpa?",
      content:
        "Bumpa does not help to run ads but it has all the right tools to help with your ads like Facebook pixel, Google analytics. You can see analytics to make informed decisions about your business. When you upload your products on your website, you can share your website link to your customers and also run ads on your website.  ",
    },
    {
      id: 4,
      title: "Is Bumpa only available in Nigeria?",
      content:
        "Yes, Bumpa is currently only available in Nigeria but is set to have a global launch soon. ",
    },
    {
      id: 5,
      title: "Can my data get lost?",
      content:
        "Your Bumpa website and data is completely cloud - based, which means your data cannot get lost. It also means that you do not have to worry about maintaining software or servers.        ",
    },

    {
      id: 6,
      title: "Devices that can use Bumpa",
      content: "You can get the Bumpa app on apple store or play store. ",
    },
  ],
  website: [
    {
      id: 1,
      title: "Is my website free?",
      content:
        "Your website is completely free and created immediately you sign up.",
    },
    {
      id: 2,
      title: "How do I get my website link?  ",
      content:
        "Your website link is located at the top left corner of your Bumpa home page.",
    },
    {
      id: 3,
      title: "Can I use my custom domain on Bumpa?  ",
      content:
        "Yes, you can use a custom domain on your website. You can either purchase or integrate an existing domain when you are on a paid plan. ",
    },
    {
      id: 4,
      title: "Can I customise my website on Bumpa?",
      content:
        "Yes, you can; however, website customization is only available for paying users",
    },
    {
      id: 5,
      title: "Can I offer discounts and coupons to my customers?",
      content:
        "Yes, you can offer discounts and coupon codes to your customers through the Bumpa app.",
    },
    {
      id: 6,
      title: "Do my customers need to have the Bumpa app to purchase from me?",
      content:
        "No, your customers do not need to download the bumpa app to purchase from your website.  All they need is your website link and they can make purchases anytime.",
    },
  ],
  inventory: [
    {
      id: 1,
      title: "What happens when I receive an order?",
      content:
        " Everytime you receive an order, you will receive an in-app notification and also an email to notify you about your order.",
    },
    {
      id: 2,
      title: "What sales channels can I record orders from?",
      content:
        "You can record orders from both offline and online channels like your physical store, website, Instagram, Whatsapp, etc",
    },
    {
      id: 3,
      title: "How do I track my sales?      ",
      content:
        "On the Bumpa app, you can use the analytics feature to track your sales, products and customers.       With sales, you can compare sales from last week, this month, last month, quarter, this year and last year. You can see how much you have made from  each sales channel per period.       With products, you can track your top 5 performing products and least performing products per period.      With customers,  you can see how many new customers you have per period, how many returning customers, total customers and average spend of your customers per period. You can also see your top customers by trade and volume.    ",
    },
    {
      id: 4,
      title: "Do I get business reports?",
      content:
        "Yes, Bumpa sends weekly, monthly  business reports to your email.",
    },
  ],
  messaging: [
    {
      id: 1,
      title: "What kind of messages can I send on Bumpa?",
      content:
        "You can send SMS and Emails from the Bumpa app directly to your customers. ",
    },
    {
      id: 2,
      title: "What are messaging credits? ",
      content:
        "Messaging credits are  like  airtime, they are used to send email and sms campaigns to your customers. You can send these campaigns to customer segments like the top 10% of your customers, customers with no purchase in 30 days etc. For sms, you use 3 messaging credits per sms and 1 messaging credit per email",
    },
    {
      id: 3,
      title: "How can I get messaging credits?",
      content:
        "Messaging credits are added to your Bumpa app once every month, depending on your subscription plan.",
    },
    {
      id: 4,
      title: "Can I send social media messages on the Bumpa app?",
      content:
        "On the Bumpa app, you can now integrate your Instagram dms  on the “connected Apps” page.        ",
    },
    {
      id: 5,
      title:
        "Is there a limit to the number of messages or campaigns I can send from the Bumpa app? ",
      content:
        "No, there is no limit to the number of messages you can send on the Bumpa app, as long as you have messaging credits.      ",
    },
  ],

  // connected: [
  //   {
  //     id: 1,
  //     title: "Where can I find “Connected Apps” on Bumpa?",
  //     content: "Connected Apps is located in the “more” page of the Bumpa App ",
  //   },
  //   {
  //     id: 2,
  //     title: "What apps are integrated on Bumpa?",
  //     content: "Meta for Instagram messages and Paystack for payments",
  //   },
  // ],
  payment: [
    {
      id: 1,
      title: "When do I receive my payments?",
      content:
        "Payments in Naira are remitted within 24 hours into your chosen bank account added on the app. For website  transactions, websites in foreign currencies ( USD, GBP, EUR) payment remittance is in 7 working days. ",
    },
    {
      id: 2,
      title: "What payments can I receive on Bumpa?",
      content: "You can receive payments in Naira, Euro, USD and GBP ",
    },
    {
      id: 3,
      title: "How do I get paid?",
      content:
        "When setting up your Bumpa account, you add your account details. The bank details added is where the payouts will be sent to. If the transaction is in naira, payment is remitted into your bank account in 24 hours. If the transaction is in USD, EUR, GBP it is remitted in 7 working days.",
    },
    {
      id: 4,
      title: "Does Bumpa have a transaction charge ? How much?",
      content: "Yes, there is a 1.5% transaction charge on every product sold.",
    },
    {
      id: 5,
      title: "How do I receive payments  in other currencies?",
      content:
        "If your website is set to other currencies ( USD, GBP, EUR ), to receive payments from this store you would need a domiciliary bank account. The payment will be remitted into your bank account in 7 working days. ",
    },
    {
      id: 6,
      title: "What payment option can my customers pay with? ",
      content:
        "We provide options like Card, USSD, Bank transfer, QR code and Bank. Your customers can also pay directly into your bank account, when you are on a paid plan.  ",
    },
  ],
};

export const planList = [
  {
    name: "Bumpa Basic",
    price: "Free forever",
    link: "https://getbumpa.com/register",
    linkText: "Get Started",
    id: 1,
    description:
      "Get a free  .bumpa.shop website, add up to 25 products, record sales, issue invoices/receipts etc.",
  },
  {
    name: "Bumpa Starter",
    price: "₦2,500/month",
    linkText: "Compare Plans",
    link: "http://getbumpa.com/register?pay=PLN_bk2kyzh1ifkwyk4",
    id: 2,
    description:
      "Get a personal business website, unlimited product listings, record sales, 500 messaging credits, meta integration, website customisation etc. ",
  },
  {
    name: "Bumpa Pro",
    price: "₦5,000/month",
    linkText: "Compare Plans",
    link: "http://getbumpa.com/register?pay=PLN_29gerhf22u2rmug",
    id: 3,
    description:
      "Get a business website with .com.ng, custom domain name, 1000 messaging credits, meta integration, staff accounts, multi currency checkout etc ",
  },
];

// truncate string
export const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

export const client = createClient({
  space: "3c192pdrgjge",
  accessToken: "kP_joekPayuUA_d41n9Iq7a0toqHyhCTdwOVKrD6cTk",
});

export const array_chunks = (array, chunk_size) =>
  Array(Math.ceil(array.length / chunk_size))
    .fill(1)
    .map((_, index) => index * chunk_size)
    .map((begin) => array.slice(begin, begin + chunk_size));

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatTime = (time) => {
  if (time.length > 1) {
    return time;
  } else {
    return `0${time}`;
  }
};

export const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

export const marketList = [
  {
    discount: "20",
    title: "The Good Apparel Store",
    industry: "food",
    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "10",
    title: "The Bad Apparel Store",
    industry: "textile",
    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "50",
    title: "The Sour Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "20%",
    title: "The Big Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "20",
    title: "The Good Apparel Store",
    industry: "food",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "10",
    title: "The Bad Apparel Store",
    industry: "fashion",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "50",
    title: "The Sour Apparel Store",
    industry: "game",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "20%",
    title: "The Big Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "20",
    title: "The Good Apparel Store",
    industry: "book",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "10",
    title: "The Bad Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "50",
    title: "The Sour Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "20%",
    title: "The Big Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "20",
    title: "The Good Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "10",
    title: "The Bad Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "50",
    title: "The Sour Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "20%",
    title: "The Big Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "20",
    industry: "textile",

    title: "The Good Apparel Store",
    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "10",
    title: "The Bad Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "50",
    title: "The Sour Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "20%",
    title: "The Big Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "20",
    title: "The Good Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "10",
    title: "The Bad Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "50",
    title: "The Sour Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "20%",
    title: "The Big Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "20",
    title: "The Good Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "10",
    title: "The Bad Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "50",
    title: "The Sour Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
  {
    discount: "20%",
    title: "The Big Apparel Store",
    industry: "textile",

    description:
      "We deal in high quality interior and exterior items for your home",
  },
];

export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export function stableSort(array = [], comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
