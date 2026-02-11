import CompanyAbout from '../components/company/CompanyAbout';
import CompanyWhatWeDo from '../components/company/CompanyWhatWeDo'; // New
import CompanyVision from '../components/company/CompanyVision';
import CompanyMission from '../components/company/CompanyMission';
import CompanyRoadmap from '../components/company/CompanyRoadmap'; // New

export default function Company() {
  return (
    <main className="bg-white overflow-hidden pt-20">
      <CompanyAbout />
      <CompanyWhatWeDo />
      <CompanyVision />
      <CompanyMission />
      <CompanyRoadmap />
    </main>
  );
}