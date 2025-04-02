import React, { useState } from 'react';
import { Header } from '~/components/Header';

const TestGorillaAssessmentsDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('active');
  const [itemsPerPage, setItemsPerPage] = useState(25);

  return (
    <>
      <div className="app-container">
            <Header />
        
        <main className="main-content">
          <div className="page-header">
            <h1 className="page-title">Assessments</h1>
            <button className="create-btn">
              <span className="create-btn-icon">+</span>
              Create assessment
            </button>
          </div>
          
          <div className="filters-row">
            <div className="search-container">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'active' ? 'active' : ''}`}
                onClick={() => setActiveTab('active')}
              >
                Active (3)
              </button>
              <button 
                className={`tab ${activeTab === 'inactive' ? 'active' : ''}`}
                onClick={() => setActiveTab('inactive')}
              >
                Inactive (4)
              </button>
              <button 
                className={`tab ${activeTab === 'archived' ? 'active' : ''}`}
                onClick={() => setActiveTab('archived')}
              >
                Archived (0)
              </button>
            </div>
          </div>
          
          <div className="table-container">
            <table className="assessments-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Candidates</th>
                  <th>Progress</th>
                  <th>Last activity</th>
                  <th>Date created <span className="sort-icon">↓</span></th>
                  <th>Expires</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3D Animator - Worldwide - Hybrid</td>
                  <td>1</td>
                  <td>
                    <div className="progress-bar">
                      <div className="progress-fill grey" style={{ width: '100%' }}>1</div>
                    </div>
                  </td>
                  <td>about 17 hours ago</td>
                  <td>Apr 1, 2025</td>
                  <td>-</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3D Animator - Africa - On-site</td>
                  <td>1</td>
                  <td>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '100%' }}>1</div>
                    </div>
                  </td>
                  <td>about 20 hours ago</td>
                  <td>Apr 1, 2025</td>
                  <td>-</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Africa - On-site</td>
                  <td>1</td>
                  <td>
                    <div className="progress-bar">
                      <div className="progress-fill grey" style={{ width: '100%' }}>1</div>
                    </div>
                  </td>
                  <td>about 15 hours ago</td>
                  <td>Apr 1, 2025</td>
                  <td>-</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            
            <div className="pagination-row">
              <div className="items-per-page">
                Items per page
                <div className="select-container">
                  <select 
                    className="select" 
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  >
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                  <span className="select-arrow">▼</span>
                </div>
              </div>
              
              <div className="page-info">1 - 3 of 3</div>
              
              <div className="pagination-controls">
                <button className="page-btn" disabled>
                  &lt;
                </button>
                <button className="page-btn" disabled>
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TestGorillaAssessmentsDashboard;