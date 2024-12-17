const Sidebar = () => {
    return (
        <div className="w-full lg:w-1/5 absolute z-10 lg:right-0">
            <div className="flex flex-col bg-violet-400 font-semibold rounded-md py-2 text-white dark:bg-violet-700">
                <a href={'/'} className="h-fit px-8 py-2 hover:bg-violet-500">Inicio</a>
                <a href={'/'} className="h-fit px-8 py-2 hover:bg-violet-500">Productos</a>
                <a href={'/'} className="h-fit px-8 py-2 hover:bg-violet-500">Iniciar sesión</a>
            </div>
        </div>
    )
}

export default Sidebar;