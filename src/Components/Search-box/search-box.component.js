import { Component } from 'react';

class SearchBox extends Component {
    render() {
        return(
            <input type={this.props.className}className='search-box' placeholder={this.props.placeholder} onChange={ this.props.onChangeHandler } />
        )
    }
}

export default SearchBox;