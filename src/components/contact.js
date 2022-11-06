function Contact(){
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-4 sm:px-1">
            <h3 className="text-md font-small leading-1 text-gray-100">Contact Information</h3>
            </div>
            <div className="border-t border-gray-200">
            <dl>
                <div className="bg-gray-50 px-4 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Emirul Mukmin</dd>
                </div>
                <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Job</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">IT Student</dd>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">emirulm@netlab.com</dd>
                </div>
                <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">628193758493</dd>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-1 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm text-gray-300 sm:col-span-1 sm:mt-0" style={{width: 550}}>
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                    qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. 
                    Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                </dd>
                </div>
            </dl>
            </div>
    </div>
    )
}

export default Contact;