export const Avatar = ({
   name,
   size="small"
}:{name:string,size:"small"|"big"})=>{
    const intials = name.charAt(0).toUpperCase();
    const w_hsize = size==="small"?"w-6 h-6":"w-10 h-10";
    return(
        <div className={`relative inline-flex items-center justify-center ${w_hsize} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className={` ${size === "small"?"text-xs":"text-md"} text-gray-600 dark:text-gray-300`}>{intials}</span>
</div>
    )
}