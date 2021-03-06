import React from 'react';
import CategoryItem from './CategoryListItem';

export default function CategoriesList(props) {
  const {
    categories,
    getCategoriesId,
  } = props;

  const category = categories.map((item) => {

    return (
      <CategoryItem
        key={item.id}
        category={item}
        getCategoriesId={getCategoriesId}
      />
    );
  });

  if(categories.length !== 0) {
    return (
      <ul>
        {category}
      </ul>
    );
  } else {
    return null;
  }
}