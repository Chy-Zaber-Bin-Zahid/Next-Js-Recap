// "use client";

// import AsyncSelect from "react-select/async";
// import makeAnimated from "react-select/animated";
// import axios from "axios";

// export default function ReactSelectTest() {
//   const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" },
//   ];

//   const animatedComponents = makeAnimated();

//   const customStyles = {
//     control: (provided: any, state: any) => ({
//       ...provided,
//       backgroundColor: state.isFocused ? "#E8F1FE" : "#FFFFFF",
//       borderColor: state.isFocused ? "#3A83E9" : "#CCCCCC",
//     }),
//     option: (provided: any, state: any) => ({
//       ...provided,
//       backgroundColor: state.isSelected ? "#3A83E9" : "#FFFFFF",
//       color: state.isSelected ? "#FFFFFF" : "#000000",
//     }),
//   };

//   const loadOptions =  (inputValue: any) => {
//     console.log(inputValue);
//     return axios.get(
//       `http://192.168.0.168:5000/company/list?page=1&size=10&query=${inputValue}`
//     );
//   };

//   const handleChange = (change: string | number) => {
//     console.log(change);
//   };
//   return (
//     <div>
//       <AsyncSelect
//         // options={options}
//         components={animatedComponents}
//         styles={customStyles}
//         loadOptions={loadOptions}
//       />
//     </div>
//   );
// }
