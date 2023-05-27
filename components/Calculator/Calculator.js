import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import SectionTitle from "../SectionTitle/SectionTitle";
import StepOne from "./StepOne/StepOne";
import StepThree from "./StepThree/StepThree";
import StepTwo from "./StepTwo/StepTwo";
import axios from "axios";
import { useRouter } from "next/router";

const steps = [{ name: "site area", type: "input" }, {}, {}];

export default function Calculator({ title, packageAccordianData }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [stepOneValue, setSetOneValue] = useState({});
  const [stepTwoValue, setSetTwoValue] = useState([]);
  const [stepThreeValue, setSetThreeValue] = useState({});
  const router = useRouter();

  const sendEmail = async (packagesWithPrice = [], userDetail) => {
    const date = new Date().toString();

    try {
      // await addDoc(collection(firestore, `users`), {
      //   number: mobileNo,
      //   date: date,
      // });
      let packageAndPrice = "";

      packagesWithPrice.forEach((pricePackage) => {
        packageAndPrice =
          packageAndPrice +
          `${pricePackage.name}: Rs. ${pricePackage.price}<br/>${pricePackage.packageTable}<br/><hr/>
          `;
      });

      const {
        siteArea,
        siteType,
        floors,
        noCars,
        noBikes,
        budget,
        balcony,
        plan,
        externalStair = false,
      } = stepOneValue;

      const data = `
      Construction cost request<br/>
      Name: ${userDetail.userName}<br/>
      Contact No: ${userDetail.no}<br/>
      Email : ${userDetail.email}<br/>
      <br/>
      Construction Cost:<br/>
      ${packageAndPrice}<br/><br/>

      Customer request Details: <br/>
      Site Area: ${siteArea}<br/>
      Site Type: ${siteType}<br/>
      No of Floors: ${floors}<br/>
      Parking Details: <br/>
      Cars: ${noCars} Bikes: ${noBikes}<br/>
      Budget: ${budget}<br/>
      No of Balcony: ${balcony}<br/>
      Start Time: ${plan}<br/>
      External Stair required : ${externalStair}
    `;

      const res = await axios.post("/api/calc", {
        number: userDetail.no,
        data,
      });

      router.push("thank-you");
    } catch (e) {
      console.log(e);
    }
  };

  const calculateCost = (userDetail) => {
    const {
      siteArea,
      siteType,
      floors,
      noCars,
      noBikes,
      budget,
      balcony,
      plan,
      externalStair = false,
    } = stepOneValue;

    const carParkingSpace = 180;
    const bikeParkingSpace = 40;
    const stairSpace = 80;
    const buildUpAreaPercent = 0.8; // 80% of total area
    const balconySpace = 80;

    const buildUpArea = siteArea * buildUpAreaPercent;

    let details = {};
    const floorDetails = new Array(parseInt(floors) + 1)
      .fill(0)
      .map((ar, index) => {
        if (index === 0) {
          const carParking = noCars * carParkingSpace;
          const bikeParking = noBikes * bikeParkingSpace;
          const totalParking = carParking + bikeParking;
          details["parking"] = totalParking;
          let secondaryBuildUpArea = totalParking;
          if (externalStair) {
            secondaryBuildUpArea = secondaryBuildUpArea + stairSpace;
          }
          const floorBuildUpArea = buildUpArea - secondaryBuildUpArea;
          details[index] = floorBuildUpArea;
          return {
            primarySpace: floorBuildUpArea,
            secondarySpace: secondaryBuildUpArea,
          };
        } else {
          let secondaryBuildUpArea = 0;
          if (index === 1) {
            details["balcony"] = balconySpace * balcony;
            secondaryBuildUpArea = balconySpace * balcony;
          }
          if (externalStair) {
            secondaryBuildUpArea = secondaryBuildUpArea + stairSpace;
          }
          const floorBuildUpArea = buildUpArea - secondaryBuildUpArea;
          details[index] = floorBuildUpArea;
          return {
            primarySpace: floorBuildUpArea,
            secondarySpace: secondaryBuildUpArea,
          };
        }
      });

    const secondaryBuildUpPrice = 0.8; // 80% of actual price;
    const quotationForSelectedPackage = stepTwoValue.map((packageDetail) => {
      const secondaryAmt = packageDetail.amt * secondaryBuildUpPrice;
      let packagePrice = 0;
      let packageTable = `<table style="width:100%;text-align:left"><tr><th></th><th>Area (sq.ft)</th><th>Price /Sq.ft</th><th>Price</th></tr>`;
      floorDetails.forEach((floorBuildUp, index) => {
        if (index === 0 && details.parking) {
          packageTable =
            packageTable +
            `<tr><td>GF parking</td><td>${
              details["parking"]
            }</td><td>${secondaryAmt}</td><td>${
              secondaryAmt * details["parking"]
            }</td></tr>`;
        }
        if (index === 1 && details.balcony) {
          packageTable =
            packageTable +
            `<tr><td>Balcony</td><td>${
              details["balcony"]
            }</td><td>${secondaryAmt}</td><td>${
              secondaryAmt * details["balcony"]
            }</td></tr>`;
        }

        packageTable =
          packageTable +
          `<tr><td>${index} Floor</td><td>${details[index]}</td><td>${
            packageDetail.amt
          }</td><td>${packageDetail.amt * details[index]}</td></tr>`;

        if (externalStair) {
          packageTable =
            packageTable +
            `<tr><td>External stair</td><td>${stairSpace}</td><td>${secondaryAmt}</td><td>${
              secondaryAmt * stairSpace
            }</td></tr>`;
        }

        packagePrice +=
          floorBuildUp.primarySpace * packageDetail.amt +
          floorBuildUp.secondarySpace * secondaryAmt;
      });
      packageTable = packageTable + `</table>`;

      return {
        name: packageDetail.packageName,
        price: packagePrice,
        packageTable,
      };
    });
    sendEmail(quotationForSelectedPackage, userDetail);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 2:
        return (
          <StepTwo
            value={stepTwoValue}
            setValue={setSetTwoValue}
            packageAccordianData={packageAccordianData}
            onPrevClick={() => {
              setCurrentStep(1);
            }}
            onNextClick={() => {
              setCurrentStep(3);
            }}
          />
        );
      case 3:
        return (
          <StepThree
            value={stepThreeValue}
            setValue={setSetThreeValue}
            onPrevClick={() => {
              setCurrentStep(2);
            }}
            onNextClick={(userDetail) => {
              calculateCost(userDetail);
            }}
          />
        );
      default:
        return (
          <StepOne
            setValue={setSetOneValue}
            value={stepOneValue}
            onNextClick={() => {
              setCurrentStep(2);
            }}
          />
        );
    }
  };

  return (
    <div style={{ width: "100%", padding: "2rem 1.5rem 2rem" }}>
      <SectionTitle title={title}></SectionTitle>
      {renderStep()}
    </div>
  );
}
