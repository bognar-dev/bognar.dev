

export const Blob = ({ blobRef }: { blobRef?: React.Ref<any> }) => {
    return (

        <div
            ref={blobRef}
            id="blob"
            className="w-40 h-40 
                bg-gradient-to-r
                from-primary to-primary
                absolute 
                left-1/2
                top-1/2
                translate-x-[-50%]
                translate-y-[-50%]
                
                rounded-full 
                opacity-80
                 
                -z-20
                blur-3xl
                "
        />

    );
};
