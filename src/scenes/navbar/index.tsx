import FlexBetween from "@/components/FlexBetween";
import {useTheme} from "@mui/material";
import logo from '../../../public/logo.png'

type Props = {};

const Navbar = (props: Props) => {
    const {palette} = useTheme();
    return (
        <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
            {/* LEFT SIDE */}
            <FlexBetween gap="0.75rem">
                <img width={100} src={logo}/>
            </FlexBetween>
        </FlexBetween>
    );
};

export default Navbar;
