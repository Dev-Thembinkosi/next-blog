"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useState, useEffect } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({slug, noCount =  false, showCount = true}) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
        .from('views')
        .select('count')
        .match({slug: slug})
        .single()
        

        if (error)
          console.error(
            "Error incrementing view count inside try block: ",
            error
          );

          console.log(data)

          setViews(data ? data.count : 0);

        
      } catch (error) {
        console.error(
          "An error occured while incrementing the view count: ",
          error
        );
      }
    };

 
      getViews();
  }, [slug]);

  if (showCount) {
    return <div>{views}</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
