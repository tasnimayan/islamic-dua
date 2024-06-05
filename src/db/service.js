import db from './connection'

export const GetAllCategory = async () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM category', (err, result) => {
      if (err) {
        console.error('Internal Error:', err);
        reject({ status: 'fail', message: 'Internal server error' });
      } else {
        resolve(result);
      }
    });
  });
};

// Get ALl The sub_categories of a specific category  (complete)
export const GetSubCategory = async (categoryId) => {
  if(!categoryId){
    return { status:'fail', message:'No category id is provided' };
  }

  const query = `
    SELECT s.*,
      JSON_GROUP_ARRAY(
        JSON_OBJECT(
          'dua_id', d.dua_id,
          'dua_name_bn', d.dua_name_bn,
          'dua_name_en', d.dua_name_en
        )
      ) AS duas
    FROM
      sub_category s
    LEFT JOIN dua d ON s.subcat_id = d.subcat_id
    WHERE
      s.cat_id = ${categoryId}
    GROUP BY
      s.subcat_id;
  `

  return new Promise((resolve, reject) => {
    db.all(query, (err, subcategories) => {
      if (err) {
        console.error('Internal Error:', err);
        reject({ status: 'fail', message: 'Internal server error' });
      } else {
        // Remove  backslashes from the dua names
        const result = subcategories.map(item => ({
          ...item,
          duas : JSON.parse(item["duas"])
        }));
        resolve(result);
      }
    });
  });
};

// Get ALl The Duas of a specific category (complete)
export const GetDua = async (categoryId) => {
  if(!categoryId){
    return { status:'fail', message:'No category id is provided' };
  }

  let query = `
    SELECT 
      dua.subcat_id,
      sub_category.subcat_name_en,
      sub_category.subcat_name_bn,
      JSON_GROUP_ARRAY(JSON_OBJECT(
          'id', dua.id,
          'cat_id', dua.cat_id,
          'subcat_id', dua.subcat_id,
          'dua_id', dua.dua_id,
          'dua_name_bn', dua.dua_name_bn,
          'dua_name_en', dua.dua_name_en,
          'top_bn', dua.top_bn,
          'top_en', dua.top_en,
          'dua_arabic', dua.dua_arabic,
          'dua_indopak', dua.dua_indopak,
          'clean_arabic', dua.clean_arabic,
          'transliteration_bn', dua.transliteration_bn,
          'transliteration_en', dua.transliteration_en,
          'translation_bn', dua.translation_bn,
          'translation_en', dua.translation_en,
          'bottom_bn', dua.bottom_bn,
          'bottom_en', dua.bottom_en,
          'refference_bn', dua.refference_bn,
          'refference_en', dua.refference_en,
          'audio', dua.audio
      )) AS duas
    FROM dua
    JOIN sub_category ON dua.subcat_id = sub_category.id
    WHERE dua.cat_id = ${categoryId}
    GROUP BY dua.subcat_id, sub_category.subcat_name_en, sub_category.subcat_name_bn;
  `

  return new Promise((resolve, reject) => {
    db.all(query, (err, duas) => {
      if (err) {
        console.error('Internal Error:', err);
        reject({ status: 'fail', message: 'Internal server error' });
      } else {
        const result = duas.map(item => ({
          ...item,
          duas : JSON.parse(item["duas"])
        }));
        resolve(result);
      }
    });
  });

};