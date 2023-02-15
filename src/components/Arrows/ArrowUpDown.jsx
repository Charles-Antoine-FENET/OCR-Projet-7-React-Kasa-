import arrowUp from '../../assets/img/arrowUp.png'
import arrowDown from '../../assets/img/arrowDown.png'

const ArrowUpDown = ({ isClosed }) => (
  <img
    src={isClosed ? arrowDown : arrowUp}
    alt={
      isClosed ? 'Cliquez pour ouvrir en savoir plus' : 'Cliquez pour fermer'
    }
  />
)

export default ArrowUpDown