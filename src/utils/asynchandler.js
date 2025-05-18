const asynchandler =(fn)=>{
    return (req,res,next)=>{   
        Promise.resolve(fn(req,res,next)).catch((error)=>{next(error);});
    }
}

export {asynchandler}

// const asynchandler = (fn) => async( req,res,next)=>{

//     try {
//         await fn(req,res,next);
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// }