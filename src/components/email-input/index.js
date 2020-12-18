
const EmailInput = ({onChange, onSubmit}) => {
  return (

  <form onSubmit={onSubmit}>
    <label>Email: </label>
    <input type="text" name="email" onChange={onChange}/>
    <input type="submit" value="Search"/>
  </form>
  )
};

export default EmailInput;
