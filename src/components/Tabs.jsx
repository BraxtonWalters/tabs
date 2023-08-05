import React, {useState} from 'react'
import styles from "./Tabs.module.css"

const Tabs = (props) => {
  const [tabSelected, setTabSelected] = useState(0);
  const {contentList} = props; 



  return (
    <div >
        <div className={styles.tabCon}>
        {contentList.map((tabs, index) => 
          <div className={styles.tabby} key={index} onClick={e => setTabSelected(index)}>Tab {index + 1}</div>
        )}
        </div>
       {/* display  */}
      <div>
        {contentList[tabSelected]}
      </div>
    </div>
  )
}

export default Tabs