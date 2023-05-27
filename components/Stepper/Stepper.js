import styles from "./Stepper.module.scss";

// stepsData = [{ type:1, name:'name'}]
// active - any of the active type from stepsData
// onStepsClick - cb Function

const Stepper = ({ stepsData, active = 1, onStepsClick }) => {
  if (stepsData?.length <= 0) return null;
  return (
    <div className={styles.stepperWrapper}>
      {stepsData?.map((step, index) => (
        <div className={styles.lineAndDot} key={step.type}>
          <Steps
            type={step?.type}
            name={step?.name}
            isActive={step.type === active}
            onStepsClick={onStepsClick}
          />
          {index !== stepsData.length - 1 && (
            <div className={styles.lines}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;

const Steps = ({type, name, isActive, onStepsClick}) => {
  return (
    <div className={styles.steps} onClick={()=>{onStepsClick?.(type)}}>
      <div className={[styles.circle, isActive?styles.activeBg:null].join(' ')}>{type}</div>
      <div className={[styles.name, isActive?styles.activeColor:null].join(' ')}>{name}</div>
    </div>
  );
};
