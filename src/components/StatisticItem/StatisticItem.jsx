import styles from './StatisticItem.module.css'
import first from '../../shared/images/first.svg'
import second from '../../shared/images/second.svg'
import third from '../../shared/images/third.svg'

function StatisticItem({data, index, total}) {
  const lastIndex = index === total

  let image
  if (index === 1){
    image = <img src={first} alt='first'/>
  }
  else if (index === 2){
    image = <img src={second} alt='second' />
  }
  else if (index ===3){
    image = <img src={third} alt='third' />
  }
  else{
    image = null
  }

  return (
		<div className={`${styles.Line} ${index <= 3 ? styles.underline : styles.spwidth} ${lastIndex ? styles.lastItem : ''}`}>
			<p className={styles.inst}>{data.institute}</p>
			<p className={styles.num}> {data.value.toFixed(1)}</p>
      {image}
		</div>
	)
}

export default StatisticItem;