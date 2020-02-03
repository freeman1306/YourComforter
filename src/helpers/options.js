export const countryOptions = [{ id: "1", value: "USA" }];

export const stateOptions = [{ id: "1", value: "GA" }];

export const cityOptions = [{ id: "1", value: "Atlanta" }];

export const salutationOptions = [
  {
    id: "0",
    value: "mr"
  },
  {
    id: "1",
    value: "ms"
  },
  {
    id: "2",
    value: "mrs"
  },
  {
    id: "3",
    value: "miss"
  }
];

export const genderOptions = [
  {
    id: "0",
    value: "Female"
  },
  {
    id: "1",
    value: "Male"
  },
  {
    id: "2",
    value: "Other"
  }
];

export const workPlaceOptions = [
  { id: "1", value: "Single Family" },
  { id: "2", value: "Multi Family Dwelling" },
  { id: "3", value: "Multi Dwelling with Stairs only" },
  { id: "4", value: "High Rise Apartment" },
  { id: "5", value: "High Eise Apartment with conceriege" },
  { id: "6", value: "Basement" },
  { id: "7", value: "Sudio House" },
  { id: "8", value: "Hotel/Motel" }
];

export const subjectLineOptions = [
  {id: '1', value:"Unacceptable working conditions", valueToSend:"unacceptable_working_conditions"},
  {id: '2', value:"Rude attitude", valueToSend:"rude_attitude"},
  {id: '3', value:"Real service does not match the information in an order", valueToSend:"real_service_does_not_match_the_information_in_an_order"},
  {id: '4', value:"Missed appointment", valueToSend:"missed_appointment"},
  {id: '5', value:"Late arrival", valueToSend:"late_arrival"},
  {id: '6', value:"Poor service", valueToSend:"poor_service"},
  {id: '7', value:"Rude engagement", valueToSend:"rude_engagement"},
  {id: '8', value:"Other", valueToSend:"other"},
]

export const plans = [
  {
    name: 'Individual',
    price: '25$',
    profilePhoto: 1,
    videoDuration: 30,
    companionFriends: 2,
    activeOrders: 3,
    profileVisibility: 'standart'
  },
  {
    name: 'Family',
    price: '35$',
    profilePhoto: 2,
    videoDuration: 45,
    companionFriends: 5,
    activeOrders: 5,
    profileVisibility: 'prominent'
  },
  {
    name: 'Facility',
    price: '45$',
    profilePhoto: 100,
    videoDuration: 60,
    companionFriends: 10,
    activeOrders: 10,
    profileVisibility: 'family'
  },
  {
    name: 'Rising star',
    price: '25$',
    profilePhoto: 1,
    videoDuration: 30,
    activeOrders: 3,
    profileVisibility: 'standart'
  },
  {
    name: 'The champion',
    price: '35$',
    profilePhoto: 2,
    videoDuration: 45,
    activeOrders: 5,
    profileVisibility: 'prominent'
  },
  {
    name: 'The elite',
    price: '45$',
    profilePhoto: 100,
    videoDuration: 60,
    activeOrders: 10,
    profileVisibility: 'premium'
  },
]

export const currentPlanInfo = (currentPlan)=>{
  const planInfo = plans.filter((plan)=>currentPlan.toLowerCase() === plan.name.toLowerCase())[0];
  return planInfo;
}