import PropTypes from 'prop-types'
function Student(props){

    return(
        <div className="student">
            <p> Name:{props.Name} </p>
            <p> Age : {props.Age} </p>
            <p>Company:{props.Company}</p>
        </div>
    );

}
Student.propTypes={
Name : PropTypes.string,
    Age:PropTypes.number,
    Company:PropTypes.string,
};
Student.defaultProps ={ Name:"Shiva", Age:2500, Company:"God" }



export default Student;