import PropTypes from 'prop-types';

const FirstApp = ({value}) => {
const handleAdd = () => {
    console.log('Calling handleAdd')
}

    return (
    <>
        <h1>Counter</h1>
        <span>{value}</span>
        <buttom onClick={() => handleAdd()}>+1</buttom>
    </>
    )
}
/*
FirstApp.PropTypes = {
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    sum: 300
}*/

export default FirstApp;