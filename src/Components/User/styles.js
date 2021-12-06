const styles= {
    container: {
        width: "30vw",
        border: "1px solid #333",
        borderRadius: 10,
        margin: "30px 10px",
        backgroundColor: "#e9e9e3",
        padding: 10,
        boxShadow: "7px 15px 29px -15px rgba(66, 68, 90, 1)"
    },
    header: {
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "0 15px",
        img: {
            justifySelf: "end",
            alignSelf: "center",
        },
        name: {
            justifySelf: "start",
            alignSelf: "center",
        }
    },
    icon: {
        borderRadius: "50%"
    }
}

export default styles;