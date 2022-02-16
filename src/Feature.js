function Feature(props){
    return(
        <div className="content">
            <div className="style">
                <div className="heading">
                    {props.tittle}

                </div>
                <div className="intext">
                    {props.inf}

                </div>
            </div>
             
        </div>
    )
}
export default Feature;