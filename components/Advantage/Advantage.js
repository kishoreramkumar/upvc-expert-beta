import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Advantage.module.scss";
const Advantage = () => {
  return (
    <div className={styles.advantageContainer}>
      <SectionTitle title="The Sqft.Expert Advantage" />
      <div style={{ padding: "1rem" }}>
        <div className={styles.advantageWrapper}>
          <table>
            <thead>
              <tr>
                <th className={styles.hiddenFirst}></th>
                <th className={styles.bgHeading}>sqft.expert</th>
                <th>TYPICAL EXPERIENCE</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              <tr>
                <td className={styles.rowHeading}>Price</td>
                <td className={styles.whiteBg}>
                  <ul>
                    <li>
                      In-house project management, No third-party involvement
                    </li>
                    <li>kkbkbkb</li>
                    <li>kkbkbkb</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>kkbkbkb</li>
                    <li>kkbkbkb</li>
                    <li>kkbkbkb</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className={styles.rowHeading}>SUB-CONTRACTORS</td>
                <td className={styles.whiteBg}>
                  <ul>
                    <li>kkbkbkb</li>
                    <li>
                      In-house project management, No third-party involvement
                    </li>
                    <li>kkbkbkb</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>kkbkbkb</li>
                    <li>
                      In-house project management, No third-party involvement
                    </li>
                    <li>kkbkbkb</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
