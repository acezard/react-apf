import React from 'react'

const categoryList = props => {
  const locations = props.locations.map(location => {
    const fields = location.fields

    return (
      <li className="list-group-item" key={location.id}>
        <h4 className="cat-{{fields.field_structure_category:tid}}">{fields.title}</h4>
        <div className="body">
          {fields['field_address:street'] &&
            <span className="address">{fields['field_address:street']}</span>}
          {fields['field_address:postal_code'] &&
            <span className="address"> {fields['field_address:postal_code']}</span>}
          {fields['field_address:city'] &&
            <span className="address"> {fields['field_address:city']}</span>}
          {fields['field_address:www'] &&
            <span className="address"> {fields['field_address:www']}</span>}
          {fields['field_address:phone'] &&
            <span className="address"> {fields['field_address:phone']}</span>}
          {fields['field_address:fax'] &&
            <span className="address"> {fields['field_address:fax']}</span>}
          {fields['field_address:email'] &&
            <span className="address"> {fields['field_address:email']}</span>}
        </div>
      </li>
    )
  })

  return (
    <ul className={props.className}>
      { locations }
    </ul>
  )
}

export default categoryList