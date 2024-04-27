  const handleChange = (id) => (event) => {
    setFormData({ ...formData, [id]: event.target.value });
  };

  const handleCheckboxChange = (id) => (event) => {
    setFormData({ ...formData, [id]: event.target.checked });
  };

  const generateBarcode = () => {
    // Here you can use the formData object to generate the barcode or perform any other action
    console.log(formData);
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
            autoComplete="off"
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
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Select sex</option>
            {sexOptions.map((option, index) => (
              <option key={index} value={option}>
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
            type="text"
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
            value={formData.state}
            onChange={handleChange("state")}
            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Select a state</option>
            {stateCapitals.map((item, index) => (
              <option key={index} value={item.capital}>
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
            onChange={handleChange("country")}
            autoComplete="off"
            value={"USA"}
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
            value={formData.eyeColor}
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
              <option key={index} value={`${range.weightKg} kg / ${range.weightLbs} lbs`}>
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
              className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <span className="text-gray-700 text-sm mx-1">lbs/</span>
            <input
              type="text"
              id="weightKg"
              value={formData.weightKg}
              onChange={handleChange("weightKg")}
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
        Generate Barcode
      </button>
    </div>
  );
};