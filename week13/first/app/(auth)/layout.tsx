
export default function({
    children,
  }: {
    children: React.ReactNode;
  }){
    return (
        <div>
            <div className="p-2 border-2 text-center">

            20% off banner
            </div>
            {children}
        </div>
        
    )
}