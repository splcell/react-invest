export const convertData = (data) => {
  if(data && data !== undefined && Number(data)>= 0 || Number(data) <= 0){
      let result = Math.round(Number(data) / 1000000).toLocaleString();
      return result;
  } else {
      return '-';
  }
}