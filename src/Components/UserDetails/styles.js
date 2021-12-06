const styles = {
    userCont: {
        margin: "0 auto",
        width: 800,
        display: "flex",
        justifyContent: "center"
    },
    user: {
        display: "grid",
        gridTemplateColumns: "1fr 1.8fr",
        width: "40vw",
        border: "1px solid #333",
        borderRadius: 10,
        margin: "30px 10px",
        gap: "0 20px",
        backgroundColor: "#e9e9e3",
        boxShadow: "7px 15px 29px -15px rgba(66, 68, 90, 1)",
        paddingBottom: 10

    },
    userImg: {
        justifySelf: "stretch",
        alignSelf: "center",
    },
    userDet: {
        textAlign: "justify"
    },
    span: {
        fontWeight: 700,
    }
}

export default styles;