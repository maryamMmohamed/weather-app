import React from 'react';

const Weather = (props) => {

  return ( // di tre2a esmaha and operator y3ny lw feh kaza azhro
    <div>
      {
        props.temprature &&
        <p className='info_key'>temprature:
          <span className='info_value'>{props.temprature}</span>
        </p>
      }
      {
        props.city &&
        <p className='info_key'>city:
          <span className='info_value'>{props.city}</span>
        </p>
      }
      {
        props.country && <p className='info_key'>country:
          <span className='info_value'>{props.country}</span>
        </p>
      }
      {
        props.humidity && <p className='info_key'>humidity:
          <span className='info_value'>{props.humidity}</span>
        </p>
      }
      {
        props.description && <p className='info_key'>description:
          <span className='info_value'>{props.description}</span>
        </p>
      }
      {
        props.error && <p className='info_key'>error:
          <span className='info_value'>{props.error}</span>
        </p>
      }
    </div>
  )

}

export default Weather;