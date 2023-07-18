import React, { Component } from "react";



class Signup extends Component {
  constructor(props) {
    super(props);


    this.state = {
      form: {
        username: null,
        password: null
      },
      error: ''
    }
  }

  validate() {
    let form = this.state.form;
    
    if (!form.username) {
      this.setState({'error': 'Enter Username'})
      return false;
    } 

    if (!form.password) {
      this.setState({'error': 'Enter Password'})

      return false;
    }

    if (form.password.length < 8) {
      this.setState({'error': 'Password should be greater than or equal to 8 '})

      return false;
    }

    return true;
  }

  handleInput = (value, key) => {
    let form = this.state.form;
    form[key] = value;
    this.setState({form});
  }

  handleForm = () =>  {
    const isValidated = this.validate()
    console.log(this.state);

    if (isValidated){
      console.log('form submitted');
    } else {
      console.log('form not submitted')
    }
  }


  render() {
    const {error} = this.state;
    return(
        <section>
             <div className="register">
            <div className="col-1">
             
                <img src='https://static01.nyt.com/images/2016/05/11/us/12xp-instagram/12xp-instagram-jumbo.jpg?quality=75&auto=webp' width={"125px"}></img>
             

                <form id='form' className='flex flex-col' >
                    <input type="text" placeholder='username,phone number or email'  onChange={(data) => this.handleInput(data.target.value, "username ")}/>
                    <input type="text"  placeholder='password'
                     onChange={(data) => this.handleInput(data.target.value, "password")} />
                  
                   
                    <button  onClick={this.handleForm}className='btn'>submit</button>
                    {
                   error ?  (<h4>{error}</h4>) : (<></>)
 
                  }
                  <h5>Forgot Password? </h5>
                  <button style={{padding:"8px",borderColor:"cornflowerblue"}}>Create new account</button>

                </form>

            </div>
            
            
        </div>
        </section>
    )
   
  }
}

export default Signup;