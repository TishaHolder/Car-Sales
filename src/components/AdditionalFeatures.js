import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import { addFeature } from '../actions/actions.js';


const AdditionalFeatures = props => {  

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            //this is addFeature = props.addFeature because we are importing it from another file
            <AdditionalFeature key={item.id} feature={item} addFeature = {props.addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {

  return {
    additionalFeatures: state.store    
  }
}

export default connect(mapStateToProps , {addFeature})(AdditionalFeatures);
