interface IHeader {
  id: string;
  title: string;
}
interface IRecord {
  id: string;
  value: string;
}

const currentBidsHeader: IHeader[] = [
  {
    id: "company",
    title: "Bidder Company Name",
  },
  {
    id: "companyId",
    title: "Bidder Company ID",
  },
  {
    id: "buyer",
    title: "User Full Name",
  },
  {
    id: "userEmail", //pending
    title: "User Email",
  },
  {
    id: "buyerId",
    title: "User ID",
  },
  {
    id: "optimisedQuantity",
    title: "Bid Quantity",
  },
  {
    id: "optimisedPrice",
    title: "Bid Price",
  },
  {
    id: "incrementQuantity",
    title: "Increment Quantity",
  },
  {
    id: "date",
    title: "Created Date (UTC)",
  },
];

const auctionSealedTenderResultsPreviewMock = [
  {
    company: "ReCoast Mangrove",
    companyId: 3,
    buyer: "Auction Bidder 2 (RM)",
    buyerId: 14,
    date: "2022-04-08T12:31:43.7623985+00:00",
    optimisedQuantity: 1000,
    optimisedPrice: 15,
    optimisedTotal: 15000,
    bidLines: [
      { price: 21, quantity: 750, total: 15750 },
      { price: 20, quantity: 800, total: 16000 },
      { price: 19, quantity: 900, total: 17100 },
      { price: 18, quantity: 1000, total: 18000 },
    ],
  },
  {
    company: "Green Horizon",
    companyId: 1,
    buyer: "Auction Bidder (RM)",
    buyerId: 12,
    date: "2022-04-08T12:25:52.0406436+00:00",
    optimisedQuantity: 850,
    optimisedPrice: 15,
    optimisedTotal: 12750,
    bidLines: [
      { price: 21, quantity: 750, total: 15750 },
      { price: 20, quantity: 800, total: 16000 },
      { price: 19, quantity: 900, total: 17100 },
      { price: 18, quantity: 1000, total: 18000 },
    ],
  },
];
console.log(currentBidsHeader);
