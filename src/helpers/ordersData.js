// safe
export const REQUSETED = "requested";
// warnings
export const PENDING_A_PAYMENT = "pending_a_payment";
export const WAITING_FOR_AN_ORDER = "waiting_for_an_order";
// warnings + report
export const IN_PROGRESS = "in_progress";
export const PENDING_CONFIRMATION = "pending_confirmation";

export const COMPLETED = "completed";
export const IN_DISPUTE = "in_dispute";
export const CANCELED = "cancelled";

export const statusTypes = {
  IN_PROGRESS,
  IN_DISPUTE,
  REQUSETED,
  PENDING_A_PAYMENT,
  PENDING_CONFIRMATION,
  WAITING_FOR_AN_ORDER,
  COMPLETED,
  CANCELED
};

export const getStatus = status => {
  switch (status) {
    case statusTypes.REQUSETED:
      return {
        name: "Requested",
        color: "#DBA934"
      };
    case statusTypes.PENDING_A_PAYMENT:
      return {
        name: "Pending a payment",
        color: "#6E378C"
      };
    case statusTypes.PENDING_CONFIRMATION:
      return {
        name: "Pending confirmation",
        color: "#3163C9"
      };
    case statusTypes.IN_PROGRESS:
      return {
        name: "In progress",
        color: "#3163C9"
      };
    case statusTypes.WAITING_FOR_AN_ORDER:
      return {
        name: "Waiting for an order",
        color: "#6E378C"
      };
    case statusTypes.COMPLETED:
      return {
        name: "Completed",
        color: "#219653"
      };
    case statusTypes.CANCELED:
      return {
        name: "Cancelled",
        color: "#525E6C"
      };
    case statusTypes.IN_DISPUTE:
      return {
        name: "In dispute",
        color: "#EE3856"
      };
    default:
      return {
        name: "Default status",
        color: "#DBA934"
      };
  }
};

export const orders = [
  {
    id: "634bdf40-aed3-11e3-923b-359f1343299d",
    service: "Facility Visits(coming soon)",
    date: "04/05/2019",
    duration: "3",
    amount: 20,
    seekerId: "bd410gf1-afd3-11b9-b3d6-178at6f0y5a9",
    seekerFirstName: "John",
    seekerLastName: "Doe",
    comforterId: "634bdf40-aed3-11e9-923b-379f1343299d",
    comforterFirstName: "Rose",
    comforterLastName: "Mikk",
    status: IN_PROGRESS,
    note:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur ultrices nisi, a cursus justo varius ut. Nunc congue vulputate quam, id ultricies orci aliquet in. Integer vitae dictum eros. In porttitor at felis quis venenatis. Aenean dignissim elit in feugiat ornare. Nulla facilisi. Donec vulputate turpis vel neque congue, ullamcorper porttitor urna pretium.",
    reportText: "I want to complain of the poor service I received from your professional on June 12, 2016. Mr. Doe was one hour late for his appointment and offered nothing by way of apology when he arrived at noon. John Doe did not remove his muddy shoes upon entering my house, and consequently left a trail of dirt in the hallway. We ended our meeting after 25 minutes without either of us having accomplished anything."
  },
  {
    id: "634bdf40-aed3-11e3-923b-359f1353299d",
    service: "Facility Visits(coming soon)",
    date: "03/05/2019",
    duration: "4",
    amount: 27,
    seekerId: "bd410gf1-afd3-11b9-b3d6-178at6f0y5a9",
    seekerFirstName: "John",
    seekerLastName: "Doe",
    comforterId: "634bdf40-aed3-11e9-923b-379f1343299d",
    comforterFirstName: "Rose",
    comforterLastName: "Mikk",
    status: PENDING_A_PAYMENT,
    note:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur ultrices nisi, a cursus justo varius ut. Nunc congue vulputate quam, id ultricies orci aliquet in. Integer vitae dictum eros. In porttitor at felis quis venenatis. Aenean dignissim elit in feugiat ornare. Nulla facilisi. Donec vulputate turpis vel neque congue, ullamcorper porttitor urna pretium.",
    reportText: "I want to complain of the poor service I received from your professional on June 12, 2016. Mr. Doe was one hour late for his appointment and offered nothing by way of apology when he arrived at noon. John Doe did not remove his muddy shoes upon entering my house, and consequently left a trail of dirt in the hallway. We ended our meeting after 25 minutes without either of us having accomplished anything." 
  },
  {
    id: "634bdf44-aed3-11e3-923b-359f1353299d",
    service: "Facility Visits(coming soon)",
    date: "03/05/2019",
    duration: "4",
    amount: 27,
    seekerId: "bd410gf1-afd3-11b9-b3d6-178at6f0y5a9",
    seekerFirstName: "John",
    seekerLastName: "Doe",
    comforterId: "634bdf40-aed3-11e9-923b-379f1343299d",
    comforterFirstName: "Rose",
    comforterLastName: "Mikk",
    status: COMPLETED,
    note:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur ultrices nisi, a cursus justo varius ut. Nunc congue vulputate quam, id ultricies orci aliquet in. Integer vitae dictum eros. In porttitor at felis quis venenatis. Aenean dignissim elit in feugiat ornare. Nulla facilisi. Donec vulputate turpis vel neque congue, ullamcorper porttitor urna pretium.",
    reportText: "I want to complain of the poor service I received from your professional on June 12, 2016. Mr. Doe was one hour late for his appointment and offered nothing by way of apology when he arrived at noon. John Doe did not remove his muddy shoes upon entering my house, and consequently left a trail of dirt in the hallway. We ended our meeting after 25 minutes without either of us having accomplished anything." 
  },
  {
    id: "634bdf40-aed3-151e3-923b-359f1353299d",
    service: "Facility Visits(coming soon)",
    date: "03/05/2019",
    duration: "4",
    amount: 27,
    seekerId: "bd410gf1-afd3-11b9-b3d6-178at6f0y5a9",
    seekerFirstName: "John",
    seekerLastName: "Doe",
    comforterId: "634bdf40-aed3-11e9-923b-379f1343299d",
    comforterFirstName: "Rose",
    comforterLastName: "Mikk",
    status: IN_DISPUTE,
    note:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur ultrices nisi, a cursus justo varius ut. Nunc congue vulputate quam, id ultricies orci aliquet in. Integer vitae dictum eros. In porttitor at felis quis venenatis. Aenean dignissim elit in feugiat ornare. Nulla facilisi. Donec vulputate turpis vel neque congue, ullamcorper porttitor urna pretium.",
    reportText: "I want to complain of the poor service I received from your professional on June 12, 2016. Mr. Doe was one hour late for his appointment and offered nothing by way of apology when he arrived at noon. John Doe did not remove his muddy shoes upon entering my house, and consequently left a trail of dirt in the hallway. We ended our meeting after 25 minutes without either of us having accomplished anything." 
  },
  {
    id: "634bdf40-aed3-11e3-923b-359f1353599d",
    service: "Facility Visits(coming soon)",
    date: "03/05/2019",
    duration: "4",
    amount: 27,
    seekerId: "bd410gf1-afd3-11b9-b3d6-178at6f0y5a9",
    seekerFirstName: "John",
    seekerLastName: "Doe",
    comforterId: "634bdf40-aed3-11e9-923b-379f1343299d",
    comforterFirstName: "Rose",
    comforterLastName: "Mikk",
    status: PENDING_CONFIRMATION,
    note:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur ultrices nisi, a cursus justo varius ut. Nunc congue vulputate quam, id ultricies orci aliquet in. Integer vitae dictum eros. In porttitor at felis quis venenatis. Aenean dignissim elit in feugiat ornare. Nulla facilisi. Donec vulputate turpis vel neque congue, ullamcorper porttitor urna pretium.",
    reportText: "I want to complain of the poor service I received from your professional on June 12, 2016. Mr. Doe was one hour late for his appointment and offered nothing by way of apology when he arrived at noon. John Doe did not remove his muddy shoes upon entering my house, and consequently left a trail of dirt in the hallway. We ended our meeting after 25 minutes without either of us having accomplished anything." 
  },
  {
    id: "634bdf40-a4d3-11e3-923b-359f1353599d",
    service: "Facility Visits(coming soon)",
    date: "03/05/2019",
    duration: "4",
    amount: 27,
    seekerId: "bd410gf1-afd3-11b9-b3d6-178at6f0y5a9",
    seekerFirstName: "John",
    seekerLastName: "Doe",
    comforterId: "634bdf40-aed3-11e9-923b-379f1343299d",
    comforterFirstName: "Rose",
    comforterLastName: "Mikk",
    status: IN_PROGRESS,
    note:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur ultrices nisi, a cursus justo varius ut. Nunc congue vulputate quam, id ultricies orci aliquet in. Integer vitae dictum eros. In porttitor at felis quis venenatis. Aenean dignissim elit in feugiat ornare. Nulla facilisi. Donec vulputate turpis vel neque congue, ullamcorper porttitor urna pretium.",
    reportText: "I want to complain of the poor service I received from your professional on June 12, 2016. Mr. Doe was one hour late for his appointment and offered nothing by way of apology when he arrived at noon. John Doe did not remove his muddy shoes upon entering my house, and consequently left a trail of dirt in the hallway. We ended our meeting after 25 minutes without either of us having accomplished anything." 
  },
  {
    id: "634bdf40-aed3-11e3-92jb-359f1353599d",
    service: "Facility Visits(coming soon)",
    date: "03/05/2019",
    duration: "4",
    amount: 27,
    seekerId: "bd410gf1-afd3-11b9-b3d6-178at6f0y5a9",
    seekerFirstName: "John",
    seekerLastName: "Doe",
    comforterId: "634bdf40-aed3-11e9-923b-379f1343299d",
    comforterFirstName: "Rose",
    comforterLastName: "Mikk",
    status: REQUSETED,
    note:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur ultrices nisi, a cursus justo varius ut. Nunc congue vulputate quam, id ultricies orci aliquet in. Integer vitae dictum eros. In porttitor at felis quis venenatis. Aenean dignissim elit in feugiat ornare. Nulla facilisi. Donec vulputate turpis vel neque congue, ullamcorper porttitor urna pretium.",
    reportText: "I want to complain of the poor service I received from your professional on June 12, 2016. Mr. Doe was one hour late for his appointment and offered nothing by way of apology when he arrived at noon. John Doe did not remove his muddy shoes upon entering my house, and consequently left a trail of dirt in the hallway. We ended our meeting after 25 minutes without either of us having accomplished anything." 
  },
  {
    id: "634bdf40-aed3-11e3-923b-359f1gh3599d",
    service: "Facility Visits(coming soon)",
    date: "03/05/2019",
    duration: "4",
    amount: 27,
    seekerId: "bd410gf1-afd3-11b9-b3d6-178at6f0y5a9",
    seekerFirstName: "John",
    seekerLastName: "Doe",
    comforterId: "634bdf40-aed3-11e9-923b-379f1343299d",
    comforterFirstName: "Rose",
    comforterLastName: "Mikk",
    status: IN_DISPUTE,
    note:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur ultrices nisi, a cursus justo varius ut. Nunc congue vulputate quam, id ultricies orci aliquet in. Integer vitae dictum eros. In porttitor at felis quis venenatis. Aenean dignissim elit in feugiat ornare. Nulla facilisi. Donec vulputate turpis vel neque congue, ullamcorper porttitor urna pretium.",
    reportText: "I want to complain of the poor service I received from your professional on June 12, 2016. Mr. Doe was one hour late for his appointment and offered nothing by way of apology when he arrived at noon. John Doe did not remove his muddy shoes upon entering my house, and consequently left a trail of dirt in the hallway. We ended our meeting after 25 minutes without either of us having accomplished anything." 
  },
  {
    id: "634bdf40-aed3-11e3-923b-359f1353h99d",
    service: "Facility Visits(coming soon)",
    date: "03/05/2019",
    duration: "4",
    amount: 27,
    seekerId: "bd410gf1-afd3-11b9-b3d6-178at6f0y5a9",
    seekerFirstName: "John",
    seekerLastName: "Doe",
    comforterId: "634bdf40-aed3-11e9-923b-379f1343299d",
    comforterFirstName: "Rose",
    comforterLastName: "Mikk",
    status: WAITING_FOR_AN_ORDER,
    note:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur ultrices nisi, a cursus justo varius ut. Nunc congue vulputate quam, id ultricies orci aliquet in. Integer vitae dictum eros. In porttitor at felis quis venenatis. Aenean dignissim elit in feugiat ornare. Nulla facilisi. Donec vulputate turpis vel neque congue, ullamcorper porttitor urna pretium.",
    reportText: "I want to complain of the poor service I received from your professional on June 12, 2016. Mr. Doe was one hour late for his appointment and offered nothing by way of apology when he arrived at noon. John Doe did not remove his muddy shoes upon entering my house, and consequently left a trail of dirt in the hallway. We ended our meeting after 25 minutes without either of us having accomplished anything." 
  },
  {
    id: "634bdf40-aed3-11e3-923b-359f1g53599d",
    service: "Facility Visits(coming soon)",
    date: "03/05/2019",
    duration: "4",
    amount: 27,
    seekerId: "bd410gf1-afd3-11b9-b3d6-178at6f0y5a9",
    seekerFirstName: "John",
    seekerLastName: "Doe",
    comforterId: "634bdf40-aed3-11e9-923b-379f1343299d",
    comforterFirstName: "Rose",
    comforterLastName: "Mikk",
    status: REQUSETED,
    note:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur ultrices nisi, a cursus justo varius ut. Nunc congue vulputate quam, id ultricies orci aliquet in. Integer vitae dictum eros. In porttitor at felis quis venenatis. Aenean dignissim elit in feugiat ornare. Nulla facilisi. Donec vulputate turpis vel neque congue, ullamcorper porttitor urna pretium.",
    reportText: "I want to complain of the poor service I received from your professional on June 12, 2016. Mr. Doe was one hour late for his appointment and offered nothing by way of apology when he arrived at noon. John Doe did not remove his muddy shoes upon entering my house, and consequently left a trail of dirt in the hallway. We ended our meeting after 25 minutes without either of us having accomplished anything." 
  },
  {
    id: "634bdf40-aed3-11e3-923b-359fg353599d",
    service: "Facility Visits(coming soon)",
    date: "03/05/2019",
    duration: "4",
    amount: 27,
    seekerId: "bd410gf1-afd3-11b9-b3d6-178at6f0y5a9",
    seekerFirstName: "John",
    seekerLastName: "Doe",
    comforterId: "634bdf40-aed3-11e9-923b-379f1343299d",
    comforterFirstName: "Rose",
    comforterLastName: "Mikk",
    status: COMPLETED,
    note:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur ultrices nisi, a cursus justo varius ut. Nunc congue vulputate quam, id ultricies orci aliquet in. Integer vitae dictum eros. In porttitor at felis quis venenatis. Aenean dignissim elit in feugiat ornare. Nulla facilisi. Donec vulputate turpis vel neque congue, ullamcorper porttitor urna pretium.",
    reportText: "I want to complain of the poor service I received from your professional on June 12, 2016. Mr. Doe was one hour late for his appointment and offered nothing by way of apology when he arrived at noon. John Doe did not remove his muddy shoes upon entering my house, and consequently left a trail of dirt in the hallway. We ended our meeting after 25 minutes without either of us having accomplished anything." 
  },
  {
    id: "634bdf40-aed3-11e3-92g3b-359fg353599d",
    service: "Facility Visits(coming soon)",
    date: "03/05/2019",
    duration: "4",
    amount: 27,
    seekerId: "bd410gf1-afd3-11b9-b3d6-178at6f0y5a9",
    seekerFirstName: "John",
    seekerLastName: "Doe",
    comforterId: "634bdf40-aed3-11e9-923b-379f1343299d",
    comforterFirstName: "Rose",
    comforterLastName: "Mikk",
    status: COMPLETED,
    note:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur ultrices nisi, a cursus justo varius ut. Nunc congue vulputate quam, id ultricies orci aliquet in. Integer vitae dictum eros. In porttitor at felis quis venenatis. Aenean dignissim elit in feugiat ornare. Nulla facilisi. Donec vulputate turpis vel neque congue, ullamcorper porttitor urna pretium.",
    reportText: "I want to complain of the poor service I received from your professional on June 12, 2016. Mr. Doe was one hour late for his appointment and offered nothing by way of apology when he arrived at noon. John Doe did not remove his muddy shoes upon entering my house, and consequently left a trail of dirt in the hallway. We ended our meeting after 25 minutes without either of us having accomplished anything." 
  },
  {
    id: "634bdf40-aef3-11e3-923b-359fg353599d",
    service: "Facility Visits(coming soon)",
    date: "03/05/2019",
    duration: "4",
    amount: 27,
    seekerId: "bd410gf1-afd3-11b9-b3d6-178at6f0y5a9",
    seekerFirstName: "John",
    seekerLastName: "Doe",
    comforterId: "634bdf40-aed3-11e9-923b-379f1343299d",
    comforterFirstName: "Rose",
    comforterLastName: "Mikk",
    status: COMPLETED,
    note:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur ultrices nisi, a cursus justo varius ut. Nunc congue vulputate quam, id ultricies orci aliquet in. Integer vitae dictum eros. In porttitor at felis quis venenatis. Aenean dignissim elit in feugiat ornare. Nulla facilisi. Donec vulputate turpis vel neque congue, ullamcorper porttitor urna pretium.",
    reportText: "I want to complain of the poor service I received from your professional on June 12, 2016. Mr. Doe was one hour late for his appointment and offered nothing by way of apology when he arrived at noon. John Doe did not remove his muddy shoes upon entering my house, and consequently left a trail of dirt in the hallway. We ended our meeting after 25 minutes without either of us having accomplished anything." 
 }
];

export const getOrderById = id => {
  return new Promise((resolve, reject) => {
    const order = orders.find(order => order.id === id);
    if (order) {
      resolve(order);
    } else {
      reject("Order not found");
    }
  });
};

export const setOrderStatus = (id, status) => {
  return new Promise((resolve, reject) => {
    const order = orders.find(order => order.id === id);
    order.status = status;
    if (order) {
      resolve(order);
    } else {
      reject("Order not found");
    }
  });
};

export const getOrders = (page, count) => {
  const defaultPage = page || 1;
  const defaultCount = count || 10;
  const result = orders.filter(order => order.status !== COMPLETED);

  return new Promise((resolve, reject) => {
    if (result.length === 0) {
      reject("Orders not found");
    } else {
      resolve({
        count: defaultCount,
        pages: Math.ceil(result.length / defaultCount),
        result: result.slice((defaultPage - 1) * defaultCount, defaultPage * defaultCount)
      });
    }
  });
};

export const getCompletedOrders = (page, count) => {
  const defaultPage = page || 1;
  const defaultCount = count || 10;
  const result = orders.filter(order => order.status === COMPLETED);

  return new Promise((resolve, reject) => {
    if (result.length === 0) {
      reject("Completed order not found");
    } else {
      resolve({
        count: defaultCount,
        pages: Math.ceil(result.length / defaultCount),
        result: result.slice((defaultPage - 1) * defaultCount, defaultPage * defaultCount)
      });
    }
  });
};
