const Pager = ({
  isPrev,
  isNext,
  pages,
  onNavigation,
  currentPage,
  isRoundButton,
}) => {
  return (
    <div className={"pagerWrapper"}>
      <div>
        <div
          className={
            isPrev
              ? isRoundButton
                ? "buttonsRound"
                : "buttons"
              : isRoundButton
              ? "disabledButtonRound"
              : "disabledButton"
          }
          onClick={() => onNavigation("prev")}
          id="prevButton"
        >
          {isRoundButton ? "Prev" : "PREV"}
        </div>
      </div>
      <div className="pageMain">
        {pages.map((i) => (
          <div
            key={i}
            className={[
              "pageButtons",
              currentPage === i ? "pageButtonActive" : "",
            ].join(" ")}
            onClick={() => onNavigation(i)}
          >
            {i}
          </div>
        ))}
      </div>
      <div className="nextButton">
        <div
          className={
            isNext
              ? isRoundButton
                ? "buttonsRound"
                : "buttons"
              : isRoundButton
              ? "disabledButtonRound"
              : "disabledButton"
          }
          onClick={() => onNavigation("next")}
          id="nextButton"
        >
          {isRoundButton ? "Next" : "NEXT"}
        </div>
      </div>
      <style>{`
            .pagerWrapper {
              user-select: none;
              display: flex;
              align-items: center;
            }
            .pageMain {
              display: flex;
            }
            .pageButtons {
              border-radius: 50%;
              border: 1px solid #f9320b;
              background-color: #ffffff;
              width: 30px;
              height: 30px;
              text-align: center;
              font-size: 14px;
              padding: 9px;
              color: #f9320b;
              margin-left: 0.5rem;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              line-height: 1;
            }
            .pageButtonActive {
              border: 1px solid #f9320b;
              background-color: #f9320b;
              color: #FFFFFF;
            }
          .buttons{
            color: #f9320b;
            padding: 0 5px;
            cursor:pointer;
          }
          .buttonsRound{
            border-radius: 22px;
            background-color: #fdf1e7;
            color: #f9320b;
            padding: 12px 14px 12px 18px;
            cursor: pointer;
            font-weight: 600;
            height: 40px;
            width: 68px;
            display: inline-block;
            font-size: 16px;
          }
        
          .disabledButton{
            color: #cccccc;
            padding: 0 5px;
            pointer-events: none;
          }
          .disabledButtonRound{
            border-radius: 22px;
            background-color: #FFF1E5;
            color: #FFB693;
            padding: 12px 14px 12px 18px;
            cursor: pointer;
            font-weight: 600;
            height: 40px;
            width: 68px;
            display: inline-block;
            font-size: 16px;
            pointer-events: none;
          }
          .nextButton{
          margin-left:.5rem
          }
          }
          @media (max-width: 768px) {
              .buttons {
                  padding: 9px 10px;
                  font-size: 10px;
              }
              .buttonsRound{
                font-size:14px;
                padding: 9px 14px 12px 18px;
                height: 35px;
                width: 67px;
              }
              .disabledButton{
                  padding: 9px 10px;
                  font-size: 10px;
              }
  
              .disabledButtonRound{
                font-size:14px;
                padding: 9px 14px 12px 18px;
                height: 35px;
                width: 67px;
              }
  
              .pageButtons{
                  font-size: 10px;
                  margin-left: 4px;
                  width: 29px;
                  height: 29px;
                  padding: 7px;
              }
              .pageButtonActive{
                  font-size: 10px;
                  margin-left: 4px;
                  width: 29px;
                  height: 29px;
                  padding: 7px;
              }
          }
          }
          `}</style>
    </div>
  );
};

export default Pager;
