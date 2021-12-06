import styles from './styles'

const User = ( props ) => {

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.header.img}>
                     <img style={styles.icon} src={props.picture} alt="pic"/>
                </div>
               <div style={styles.header.name}>
                   <h2>{props.name}</h2>
               </div>
            </div>
            <p>{props.place}</p>
        </div>
    )
}

export default User;
