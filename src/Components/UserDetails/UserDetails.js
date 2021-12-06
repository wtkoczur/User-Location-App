import { useParams } from "react-router-dom";
import styles from './styles';

import Location from "../Location/Location";

const UserDetails = ({ user }) => {

    const { id } = useParams();
    const { name, email, phone, registered, picture, location } = user.find((user) => user.login.uuid === id)
    const place = [
        Number(location.coordinates.latitude),
        Number(location.coordinates.longitude)
    ];
    const address = location ? `${location.street.number} ${location.street.name}, ${location.city}` : "no data";
    const person = name ? `${name.first} ${name.last}` : "no name";
    var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const date = new Date(registered.date).toLocaleString("pl", options);
    return (
        <div style={styles.userCont}>
            <div>
                <div style={styles.user}>
                    <div style={styles.userImg}>
                        <img src={picture.large} alt="pic"/>
                    </div>
                    <div style={styles.userDet}>
                        <h2>{person}</h2>
                        <span style={styles.span}>registered: </span> {date}<br/>
                        <span style={styles.span}>email: </span> {email}<br/>
                        <span style={styles.span}>phone: </span> {phone}<br/>
                        <span style={styles.span}>address: </span> {address} <br/>{location.country}
                    </div>
                </div>

                <Location place={place} name={person}/>
            </div>
        </div>
    )
}

export default UserDetails;
