import type { ServiceAreaKey } from '@/lib/service-areas';
import {
  MdBusiness,
  MdConstruction,
  MdEvent,
  MdSchool,
  MdLocalHospital,
  MdOutlineDinnerDining,
} from 'react-icons/md';

const defaultClass = 'text-[#4d592b] size-12';

export default function ServiceAreaIcon({
  areaKey,
  className = defaultClass,
}: {
  areaKey: ServiceAreaKey;
  className?: string;
}) {
  switch (areaKey) {
    case 'corporate':
      return <MdBusiness className={className} />;
    case 'construction':
      return <MdConstruction className={className} />;
    case 'events':
      return <MdEvent className={className} />;
    case 'education':
      return <MdSchool className={className} />;
    case 'religious_bulk':
      return <MdOutlineDinnerDining className={className} />;
    case 'healthcare':
      return <MdLocalHospital className={className} />;
  }
}
