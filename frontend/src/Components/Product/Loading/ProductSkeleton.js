import React from "react";
import Card from "@material-ui/core/Card";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";

function ProductSkeleton() {
  return (
      <Card className="productContainer">
        {/* title */}
        <Skeleton width="100%" height={50}>
          <Typography>.</Typography>
        </Skeleton>
        {/* */}
        <div className="pricesContainer skePriceCon">
          <Skeleton width={50}></Skeleton>
          <Skeleton width={50}></Skeleton>
        </div>
        {/* rating */}
        <Skeleton width="100%">
          <Typography>.</Typography>
        </Skeleton>
        <br></br>
        {/* image */}
        <Skeleton variant="rect" width="100%">
          <div style={{ paddingTop: "70%" }} />
        </Skeleton>
        <br></br>
        <Skeleton width="100%" height={55}>
          <Typography>.</Typography>
        </Skeleton>
      </Card>
  );
}

export default ProductSkeleton;
