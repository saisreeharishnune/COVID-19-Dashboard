import React from "react";
import { connect } from "react-redux";
import { fetchConfirmedCases } from "../actions";
import { Flag } from 'semantic-ui-react';
import _ from 'lodash';


class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchConfirmedCases();
  }

  renderList() {
    return this.props.posts.filter(post=>post.iso2 !=='GG' && post.iso2 !=='XK' && post.iso2 !=='JE').map((post,i )=> {
      return (
        <div className="item" key={i}>
          <div className="content">
            <div className="description">
              <div style={{"display":'flex'}}><h2>{post.countryRegion}</h2><Flag name={_.toLower(post.iso2)} /><h3>{post.provinceState}</h3></div>
              <div style={ {"display": 'flex',"justifyContent": "space-between"}}>
              <p>Confirmed - {post.confirmed}</p>
              <p>Recovered - {post.recovered}</p>
              <p>Deaths - {post.deaths}</p>
              <p>Active - {post.active}</p>
            </div>
            </div>
            
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchConfirmedCases })(PostList);
