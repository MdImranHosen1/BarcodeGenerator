import React, { useState } from "react";
import bwipjs from 'bwip-js';



const stateCapitals = [

  { "state": "CA", "capital": "California","val":"636029090001" },
  { "state": "NJ", "capital": "New Jersey", "val":"636014090001"},

];


const sexOptions = ["Male", "Female", "Not Specified"];

const nameSuffix = ["JR","SR","I", "II", "III", "IV", "VI", "VII", "IX"];

const complianceType=["F","N"];

const firstNameTruncation=["Yes","No","Unknown"];
const middleNameTruncation=["Yes","No","Unknown"];
const lastNameTruncation=["Yes","No","Unknown"];


const weightRanges = [
  { "weightKg": "up to 31", "weightLbs": "up to 70" },
  { "weightKg": "32-45", "weightLbs": "71-100" },
  { "weightKg": "46-59", "weightLbs": "101-130" },
  { "weightKg": "60-70", "weightLbs": "131-160" },
  { "weightKg": "71-86", "weightLbs": "161-190" },
  { "weightKg": "87-100", "weightLbs": "191-220" },
  { "weightKg": "101-113", "weightLbs": "221-250" },
  { "weightKg": "114-127", "weightLbs": "251-280" },
  { "weightKg": "128-145", "weightLbs": "281-320" },
  { "weightKg": "146+", "weightLbs": "321+" }
];




export const PDF417Form = () => {
 const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        licenseNumber: "",
        sex: "",
        licenseClass: "",
        birthday: "",
        expirationDate: "",
        issueDate: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "USA",
        eyeColor: "BLK",
        hairColor: "BLK",
        heightFt: "",
        heightIn: "",
        documentDiscriminator: "",
        inventoryControlNumber: "",
        auditInformation: "",
        restrictionCodes: "NONE",
        endorsementCodes: "NONE",
        revisionDate: "",
        nameSuffix: "",
        complianceType: "",
        raceEthnicity: "",
        firstNameTruncation: "",
        middleNameTruncation: "",
        lastNameTruncation: "",
        under18Unit: "",
        under19Unit: "",
        under21Unit: "",
        weightRange: "",
        weightLbs: "",
        weightKg: "005",
        organDonor: false,
        veteran: false
    });

    

      const handleChange = (id) => (event) => {
    setFormData({ ...formData, [id]: event.target.value });
  };

  const handleCheckboxChange = (id) => (event) => {
    setFormData({ ...formData, [id]: event.target.checked });
  };

  const generateBarcode = () => {
    // Here you can use the formData object to generate the barcode or perform any other action
    console.log(formData);


    // const barCode="@\n\x1E\rANSI"+"636036090001"+"DL00310283"+"DLDAQ"+formData.licenseNumber+"\nDCS"+formData.lastName+"\nDDEN"+"\nDAC"+formData.firstName+"\nDDFN"+"\nDAD"+formData.middleName+"\nDDGN"+"\nDCA"+formData.licenseClass;

    //  const barCode2="@\n\x1E\rANSI" +"636029090001"+"DL00310348"+"DLDAQ"+formData.licenseNumber+"E\nDCS"+formData.lastName+"\nDDEU\nDAC"+formData.firstName+"\nDDFT\nDAD"+formData.middleName+
    // "\nDDGN\nDCA"+formData.licenseClass+"\nDCB"+formData.restrictionCodes+"\nDCD"+formData.endorsementCodes+"\nDBD"+formData.issueDate+"\nDBB"+formData.birthday+"\nDBA"+formData.expirationDate+"\nDBC"+formData.sex+"\nDAU070 IN\n"+"DAY"+formData.eyeColor+"\nDAG"+formData.address1+"\nDAI"+formData.city+"\nDAJ"+formData.state+"\nDAK"+formData.zipCode+"  \nDCF"+formData.documentDiscriminator+"\nDCG"+formData.country+"\nDAW0"+formData.weightKg+"\nDAZ"+formData.hairColor+"\nDCK"+formData.inventoryControlNumber+"\nDDA"+formData.complianceType+"\nDDB"+formData.revisionDate+"\nDAHADDRESS23\nDCJ"+formData.auditInformation+"\nDCLAP \nDCU"+formData.nameSuffix+"\nDCE"+formData.weightRange+"\nDAX00"+formData.weightKg+"\nDDH04012024\nDDI04012024\nDDJ04012024"+formData.organDonor===true?"\nDDK1":""+formData.organDonor===true?"\nDDL1":""+"\r"

// BUG nDDEU dcl
const formatDateMMDDYYYY = (date) => {
  // Assuming the date is in YYYY-MM-DD format
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);

  // Returning the formatted date as MMDDYYYY
  return month + day  + year;
};

// RANDOM DIGIT
const sha256 = require('sha256');

// Concatenate the personal information into a single string
const inputData = formData.firstName + formData.lastName + formData.middleName +
                  formData.address1 + formData.zipCode + formData.heightFt;

// Generate a SHA-256 hash of the input data
const hash = sha256(inputData);



// Convert the hash to an 8-digit number using modulo arithmetic
const randomNumber = parseInt(hash, 16) % 100000000;

  // console.log("randomNumber",randomNumber);

    const barCode2 = "@\n\\x1E\rANSI" + formData.state + "DL"+randomNumber + "DLDAQ" + formData.licenseNumber + "E\n" +
  "DCS" + formData.lastName + "\n" +
  "DDEN\n" +
  "DAC" + formData.firstName + "\n" +
  "DDFN" + (formData.middleName === "" ? "" : "\nDAD" + formData.middleName) + "\n" +
  "DDGN\n" +
  "DCA" + formData.licenseClass + "\n" +
  "DCB" + formData.restrictionCodes + "\n" +
  "DCD" + formData.endorsementCodes + "\n" +
  "DBD" + formatDateMMDDYYYY(formData.issueDate) + "\n" +
  "DBB" + formatDateMMDDYYYY(formData.birthday) + "\n" +
  "DBA" + formatDateMMDDYYYY(formData.expirationDate) + "\n" +
  "DBC" + formData.sex + "\n" +
  "DAU070 IN\n" +
  "DAY" + formData.eyeColor + "\n" +
  "DAG" + formData.address1 + "\n" +
  "DAI" + formData.city + "\n" +
  "DAJ" + formData.state + "\n" +
  "DAK" + formData.zipCode + "  \n" +
  "DCF" + formData.documentDiscriminator + "\n" +
  "DCG" + formData.country + "\n" +
  "DAW" + formData.weightLbs + "\n" +
  "DAZ" + formData.hairColor + "\n" +
  "DCK" + formData.inventoryControlNumber + "\n" +
  "DDA" + formData.complianceType + "\n" +
  "DDB" + formatDateMMDDYYYY(formData.revisionDate) + "\n" +
  "DAHADDRESS23\n" +
  "DCJ" + formData.auditInformation + "\n" +
  "DCLAP\n" +
  "DAX00" + (formData.weightKg && formData.organDonor ? "\nDDK1" : "") +
  (formData.organDonor ? "\nDDL1" : "") +
  "\r";
  console.log(barCode2);




    try {
            // The return value is the canvas element
            let canvas = bwipjs.toCanvas('mycanvas', {
                bcid: 'pdf417',       // Barcode type
                text: barCode2,    // Text to encode
                scale: 3,              // 3x scaling factor
                height: 25,            // Bar height, in millimeters
                width:100,
                includetext: true,     // Show human-readable text
                textxalign: 'center',  // Always good to set this
            });
        } catch (e) {
            console.error('Error generating barcode:', e);
        }
  };

  return (
    <div className="pl-10 pr-10">
      {/* Main Info */}
      <div className="font-bold text-[25px]">Main Info:</div>
      <div className="flex flex-row space-x-4">
        {/* First Name */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 text">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange("firstName")}
            required
            autoComplete="off"
            placeholder="Enter the first name"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Middle Name */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
            Middle Name:
          </label>
          <input
            type="text"
            id="middleName"
            placeholder="Middle name (if available)"
            value={formData.middleName}
            onChange={handleChange("middleName")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
          />
        </div>

        {/* Last Name */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            required
            placeholder="Enter the last name"
            value={formData.lastName}
            onChange={handleChange("lastName")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
      </div>

      {/* License */}
      <div className="flex flex-row space-x-4">
        {/* License Number */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700 text">
            License Number:
          </label>
          <input
            type="text"
            id="licenseNumber"
            required
            placeholder="636036090001"
            value={formData.licenseNumber}
            onChange={handleChange("licenseNumber")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Sex */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="sex" className="block text-sm font-medium text-gray-700">
            Sex:
          </label>
          <select
            id="sex"
            value={formData.sex}
            onChange={handleChange("sex")}
            required
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Select sex</option>
            {sexOptions.map((option, index) => (
              <option key={index} value={String(index + 1)}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Class */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="licenseClass" className="block text-sm font-medium text-gray-700">
            Class:
          </label>
          <input
            type="text"
            id="licenseClass"
            required
            placeholder="License class (e.g., D)"
            value={formData.licenseClass}
            onChange={handleChange("licenseClass")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
      </div>

      {/* Birthday */}
      <div className="flex flex-row space-x-4">
        {/* Birthday */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="birthday" className="block text-sm font-medium text-gray-700 text">
            Birthday:
          </label>
          <input
            type="date"
            id="birthday"
            value={formData.birthday}
            onChange={handleChange("birthday")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Expiration Date */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
            Exp Date:
          </label>
          <input
            type="date"
            id="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange("expirationDate")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
          />
        </div>

        {/* Issue Date */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="issueDate" className="block text-sm font-medium text-gray-700">
            Issue Date:
          </label>
          <input
            type="date"
            id="issueDate"
            value={formData.issueDate}
            onChange={handleChange("issueDate")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
      </div>

      {/* Address 1 */}
      <div className="flex flex-row space-x-4">
        {/* Address 1 */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="address1" className="block text-sm font-medium text-gray-700 text">
            Address 1:
          </label>
          <input
            type="text"
            id="address1"
            required
            placeholder="Address line 1 (e.g., 1942 PRICE ST)."
            value={formData.address1}
            onChange={handleChange("address1")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Address 2 */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
            Address 2:
          </label>
          <input
            type="text"
            id="address2"
            value={formData.address2}
            onChange={handleChange("address2")}
            placeholder="Address line 1 (e.g., 1942 PRICE ST)."
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
          />
        </div>

        {/* City */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City:
          </label>
          <input
            type="text"
            id="city"
            required
            placeholder="City (e.g., RAHWAY)"
            value={formData.city}
            onChange={handleChange("city")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
      </div>

      {/* State */}
      <div className="flex flex-row space-x-4">
        {/* State */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State:
          </label>
          <select
            id="state"
            value={formData.val}
            required
            onChange={handleChange("state")}
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Select a state</option>
            {stateCapitals.map((item, index) => (
              <option key={index} value={item.val}>
                {item.state + "-" + item.capital}
              </option>
            ))}
          </select>
        </div>

        {/* Zip Code */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
            Zip Code:
          </label>
          <input
            type="text"
            id="zipCode"
            required
            placeholder="ZIP code (e.g., 070654238)"
            value={formData.zipCode}
            onChange={handleChange("zipCode")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
          />
        </div>

        {/* Country */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country:
          </label>
          <input
            type="text"
            id="country"
            value={formData.country}
            disabled
            onChange={handleChange("country")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
      </div>

      {/* Eye Color */}
      <div className="flex flex-row space-x-4">
        {/* Eye Color */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="eyeColor" className="block text-sm font-medium text-gray-700 text">
            Eye Color:
          </label>
          <input
            type="text"
            id="eyeColor"
            value={formData
            .eyeColor}
            disabled
            onChange={handleChange("eyeColor")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Hair Color */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="hairColor" className="block text-sm font-medium text-gray-700">
            Hair Color:
          </label>
          <input
            type="text"
            id="hairColor"
            value={formData.hairColor}
            disabled
            onChange={handleChange("hairColor")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
          />
        </div>

        {/* Height */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="height" className="block text-sm font-medium text-gray-700">
            Height:
          </label>
          <div className="flex justify-center items-center w-full">
            <input
              type="text"
              required
              placeholder="Weight in pounds (e.g., 140)"
              id="heightFt"
              value={formData.heightFt}
              onChange={handleChange("heightFt")}
              autoComplete="off"
              className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <span className="text-gray-700 text-sm mx-1">ft</span>
            <input
              type="text"
              id="heightIn"
              value={formData.heightIn}
              onChange={handleChange("heightIn")}
              autoComplete="off"
              className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <span className="text-gray-700 text-sm mx-1">in</span>
          </div>
        </div>
      </div>

      {/* Document Discriminator */}
      <div className="flex flex-row space-x-4">
        {/* Document Discriminator */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="documentDiscriminator" className="block text-sm font-medium text-gray-700 text">
            Document Discriminator:
          </label>
          <input
            type="text"
            id="documentDiscriminator"
          
            required
            placeholder=" Document discriminator (e.g., WV202103400009412)."
            value={formData.documentDiscriminator}
            onChange={handleChange("documentDiscriminator")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Inventory Control Number */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="inventoryControlNumber" className="block text-sm font-medium text-gray-700">
            Inventory Control Number:
          </label>
          <input
            type="text"
            id="inventoryControlNumber"
            value={formData.inventoryControlNumber}
            required
            placeholder=" Inventory control number (e.g., G5KPC4CKRVNJ14SL01)"
            onChange={handleChange("inventoryControlNumber")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
          />
        </div>

        {/* Audit Information */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="auditInformation" className="block text-sm font-medium text-gray-700">
            Audit Information:
          </label>
          <input
            type="text"
            id="auditInformation"
            value={formData.auditInformation}
            onChange={handleChange("auditInformation")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
      </div>

      {/* Restriction Codes */}
      <div className="flex flex-row space-x-4">
        {/* Restriction Codes */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="restrictionCodes" className="block text-sm font-medium text-gray-700 text">
            Restriction Codes:
          </label>
          <input
            type="text"
            id="restrictionCodes"
            placeholder="Default NONE"
            value={formData.restrictionCodes}
            onChange={handleChange("restrictionCodes")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Endorsement Codes */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="endorsementCodes" className="block text-sm font-medium text-gray-700">
            Endorsement Codes:
          </label>
          <input
            type="text"
            id="endorsementCodes"
            placeholder="Default NONE"
            value={formData.endorsementCodes}
            onChange={handleChange("endorsementCodes")}
            autoComplete="off"
            
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
          />
        </div>

        {/* Revision Date */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="revisionDate" className="block text-sm font-medium text-gray-700">
            Revision Date:
          </label>
          <input
            type="date"
            id="revisionDate"
            value={formData.revisionDate}
            onChange={handleChange("revisionDate")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
      </div>

      {/* Optional Info */}
      <div className="font-bold text-[25px]">Optional Info:</div>
      <div className="flex flex-row space-x-4">
        {/* Name Suffix */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="nameSuffix" className="block text-sm font-medium text-gray-700">
            Name Suffix:
          </label>
          <select
            id="nameSuffix"
            value={formData.nameSuffix}
            onChange={handleChange("nameSuffix")}
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Select suffix</option>
            {nameSuffix.map((suffix, index) => (
              <option key={index} value={suffix}>
                {suffix}
              </option>
            ))}
          </select>
        </div>

        {/* Compliance Type */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="complianceType" className="block text-sm font-medium text-gray-700">
            Compliance Type:
          </label>
          <select
            id="complianceType"
            value={formData.complianceType}
            onChange={handleChange("complianceType")}
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">None</option>
            {complianceType.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Race / Ethnicity */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="raceEthnicity" className="block text-sm font-medium text-gray-700">
            Race / Ethnicity:
          </label>
          <input
            type="text"
            id="raceEthnicity"
            readOnly
            placeholder="AP - Asian or Pacific Islander"
            value={formData.raceEthnicity}
            onChange={handleChange("raceEthnicity")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
      </div>

      {/* First Name Truncation */}
      <div className="flex flex-row space-x-4">
        {/* First Name Truncation */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="firstNameTruncation" className="block text-sm font-medium text-gray-700">
            First Name Truncation:
          </label>
          <select
            id="firstNameTruncation"
            value={formData.firstNameTruncation}
            onChange={handleChange("firstNameTruncation")}
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="No">No</option>
            {firstNameTruncation.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Middle Name Truncation */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="middleNameTruncation" className="block text-sm font-medium text-gray-700">
            Middle Name Truncation:
          </label>
          <select
            id="middleNameTruncation"
            value={formData.middleNameTruncation}
            onChange={handleChange("middleNameTruncation")}
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="No">No</option>
            {middleNameTruncation.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Last Name Truncation */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="lastNameTruncation" className="block text-sm font-medium text-gray-700">
            Last Name Truncation:
          </label>
          <select
            id="lastNameTruncation"
            value={formData.lastNameTruncation}
            onChange={handleChange("lastNameTruncation")}
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="No">No</option>
            {lastNameTruncation.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Under 18 Unit */}
      <div className="flex flex-row space-x-4">
        {/* Under 18 Unit */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="under18Unit" className="block text-sm font-medium text-gray-700 text">
            Under 18 Unit:
          </label>
          <input
            type="date"
            id="under18Unit"
            value={formData.under18Unit}
            onChange={handleChange("under18Unit")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        {/* Under 19 Unit */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="under19Unit" className="block text-sm font-medium text-gray-700">
            Under 19 Unit:
          </label>
          <input
            type="date"
            id="under19Unit"
            value={formData.under19Unit}
            onChange={handleChange("under19Unit")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0"
          />
        </div>

        {/* Under 21 Unit */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="under21Unit" className="block text-sm font-medium text-gray-700">
            Under 21 Unit:
          </label>
          <input
            type="date"
            id="under21Unit"
            value={formData.under21Unit}
            onChange={handleChange("under21Unit")}
            autoComplete="off"
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>
      </div>

      {/* Weight Range */}
      <div className="flex flex-row space-x-4">
        {/* Weight Range */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="weightRange" className="block text-sm font-medium text-gray-700">
            Weight Range:
          </label>
          <select
            id="weightRange"
            value={formData.weightRange}
            onChange={handleChange("weightRange")}
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Not Set</option>
            {weightRanges.map((range, index) => (
              <option key={index} value={`${index} kg / ${range.weightLbs} lbs`}>
                {`${range.weightKg} kg / ${range.weightLbs} lbs`}
              </option>
            ))}
          </select>
        </div>

        {/* Weight */}
        <div className="w-1/3 pl-2 pr-2">
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
            Weight:
          </label>
          <div className="flex justify-center items-center w-full">
            <input
              type="text"
              id="weightLbs"
              value={formData.weightLbs}
              onChange={handleChange("weightLbs")}
              autoComplete="off"
              placeholder="Always 3 Digit like 002"
              className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <span className="text-gray-700 text-sm mx-1">lbs/</span>
            <input
              type="text"
              id="weightKg"
              value={formData.weightKg}
              onChange={handleChange("weightKg")}
               placeholder="Always 3 Digit like 022"
              autoComplete="off"
              className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <span className="text-gray-700 text-sm mx-1">kg</span>
          </div>
        </div>

        {/* Organ Donor and Veteran */}
        <div className="w-1/3 pl-2 pr-2 mt-8 flex">
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                id="organDonor"
                checked={formData.organDonor}
                onChange={handleCheckboxChange("organDonor")}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 ">
                Organ Donor
              </span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                id="veteran"
                checked={formData.veteran}
                onChange={handleCheckboxChange("veteran")}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 ">
                Veteran
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Generate Barcode Button */}
      <button
        type="button"
        className="ml-2 mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={generateBarcode}
      >
        Barcode PDF417
      </button>
      <div >
              
              <header className="App-header">
                <p>Barcode:</p>
                <canvas id="mycanvas"></canvas>
            </header>
            <pdf417/>
        </div>
    </div>
  );
};