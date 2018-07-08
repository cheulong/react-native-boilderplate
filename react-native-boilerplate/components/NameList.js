import React, { Component, Fragment } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchNames, fetchNamesFire } from './../actions';

class NameList extends Component {
    componentWillMount() {
        this.props.fetchNamesFire();
    }
    renderNameList() {
        const { names } = this.props;
        return names.map(name => (<Text key={name.name}>{name.name}</Text>));
    }
    renderNameListFire() {
        const { namesFire } = this.props;
        if (namesFire.length > 0) {
            return namesFire.map(name => (<Text key={name.name}>{name.name}</Text>));
        }
    }
    render() {
        return (
            <Fragment>
                {this.renderNameList()}
                {this.renderNameListFire()}
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    names: state.names,
    namesFire: state.namesFire
    
});
export default connect(mapStateToProps, { fetchNames, fetchNamesFire })(NameList);
