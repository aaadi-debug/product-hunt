import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  return (
    <div className="container mx-auto px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 flex flex-wrap items-center text-sm py-4">
      <a href="#" className="text-slate-400 mr-1">Home</a>
      <ChevronRight size={18} className="text-slate-600 mx-1" />
      <a href="#" className="text-slate-400 mr-1">Product</a>
      <ChevronRight size={18} className="text-slate-600 mx-1" />
      <span className="text-slate-700">Video - Fast Translator</span>
    </div>
  );
}

export default Breadcrumbs;
