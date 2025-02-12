import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'dushenbyo', 
    api_key: '795342147694418', 
    api_secret: 'hGGv90p_W-nFPnhm5JVpHuIlM2w' // Click 'View API Keys' above to copy your API secret
});

export default cloudinary;