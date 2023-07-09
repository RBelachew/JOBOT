import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState } from "react"
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';


//design the expand icon
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


//card wich holds the details of job with option of expand details
export const CollapsableCard = ({content, collapsableContent, style}) => {

    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded((prevState) => !prevState)
    }

    return (
        <Card style={style}>
            <CardContent style={style}>
                {content}
            </CardContent>
            <CardActions>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                >
                <ExpandMoreIcon/>

                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} style={style}>
                {collapsableContent}
            </Collapse>
        </Card>
    )
}