import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(190 , 190, 190, 0.2)'
        }}>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 20
                }}>
                <ClipLoader
                    color={'#454545'}
                    loading={true}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div >
    );
}

export default Spinner