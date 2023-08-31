import React from 'react';

class SuccsessComponent extends React.Component{

    componentDidMount(){
        alert('Success Component will render');
    }

    componentWillUnmount(){
        alert('Success Component will UnMount');
    }

    render(){
        return(
            <div>
                <h2>Login Success...</h2>
            </div>
        )
    }
}

class ErrorComponent extends React.Component{

    componentDidMount(){
        alert('Error Component will render');
    }

    componentWillUnmount(){
        alert('Error Component will UnMount');
    }

    render(){
        return(
            <div>
                <h2>Invlaid Login...</h2>
            </div>
        )
    }
}
export default class LifeCycleDemo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            UserDetails : {
                UserName : 'AshwaniPandey',
                Password : '@Ashwani0805'
            }, 
            FormDetails : {
                UserName : '',
                Password : ''
            },
            result : '',
        } 
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePaswword = this.handlePaswword.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleUserName(evet){
        this.setState({
            FormDetails : {
                UserName : evet.target.value,
                Password : this.state.FormDetails.Password
            }
        })
    }

    handlePaswword(evet){
        this.setState({
            FormDetails : {
                UserName : this.state.FormDetails.UserName,
                Password : evet.target.value
            }
        })
    }
    
    handleLoginClick(){
        
        if(this.state.UserDetails.UserName == this.state.FormDetails.UserName && this.state.UserDetails.Password == this.state.FormDetails.Password){
            this.setState({
                result : <SuccsessComponent />
            })
        }else{
            this.setState({
                result : <ErrorComponent />
            })
        }
    }

    render(){
        return(
            <div className='container-fluid'>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onChange={this.handleUserName} /></dd>
                    <dt>Password</dt>
                    <dd><input type="text" onChange={this.handlePaswword} /></dd>
                </dl>
                <button onClick={this.handleLoginClick}>
                    Login
                </button>
                <h2>{this.state.result}</h2>
            </div>
        )
    }

    
}
