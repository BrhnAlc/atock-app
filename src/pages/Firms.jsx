import { Button, Typography } from "@mui/material"
import { useEffect } from "react"
import useStockCall from "../hooks/useStockCall"
import { useSelector } from 'react-redux';

const Firms = () => {
  const { getFirms } = useStockCall();
  const firms = useSelector(state => state.firms); // Hangi state'i seçmek istediğinizi belirtin

  useEffect(() => {
    getFirms();
  }, [getFirms]); // Dependency array içine getFirms ekleyin

  console.log(firms);
  
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained">NEW FIRM</Button>
    </div>
  )
}

export default Firms;




