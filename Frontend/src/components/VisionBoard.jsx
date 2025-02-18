import React, { useState } from 'react';
import { XCircle, Plus, Edit2, Trash2, Quote, Target, Flag } from 'lucide-react';

const VisionBoard = ({ onClose }) => {
  const [visionItems, setVisionItems] = useState([
    {
      id: 1,
      type: 'goal',
      title: 'Senior Developer',
      description: 'Achieve senior developer position by mastering system design',
      color: 'bg-blue-100'
    },
    {
      id: 2,
      type: 'quote',
      content: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
      author: 'Winston Churchill',
      color: 'bg-purple-100'
    },
    {
      id: 3,
      type: 'milestone',
      title: 'AWS Certification',
      deadline: '2024-06',
      color: 'bg-green-100'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({
    type: 'goal',
    title: '',
    description: '',
    content: '',
    author: '',
    deadline: '',
    color: 'bg-blue-100'
  });

  const colors = [
    'bg-blue-100',
    'bg-green-100',
    'bg-purple-100',
    'bg-yellow-100',
    'bg-pink-100'
  ];

  const handleAddItem = () => {
    if (newItem.type === 'goal' && !newItem.title) return;
    if (newItem.type === 'quote' && !newItem.content) return;
    if (newItem.type === 'milestone' && !newItem.title) return;

    setVisionItems([...visionItems, { ...newItem, id: Date.now() }]);
    setShowAddForm(false);
    setNewItem({
      type: 'goal',
      title: '',
      description: '',
      content: '',
      author: '',
      deadline: '',
      color: 'bg-blue-100'
    });
  };

  const handleDeleteItem = (id) => {
    setVisionItems(visionItems.filter(item => item.id !== id));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mt-[60px]">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full m-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">Vision Board</h2>
            <p className="text-sm text-gray-500">Visualize your goals and aspirations</p>
          </div>
          <button onClick={onClose}>
            <XCircle className="w-6 h-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Vision Board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {visionItems.map((item) => (
            <div 
              key={item.id} 
              className={`${item.color} p-4 rounded-lg relative group`}
            >
              <div className="absolute top-2 right-2 hidden group-hover:flex gap-2">
                <button className="p-1 hover:bg-white rounded">
                  <Edit2 className="w-4 h-4 text-gray-600" />
                </button>
                <button 
                  className="p-1 hover:bg-white rounded"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>

              {item.type === 'goal' && (
                <>
                  <Target className="w-6 h-6 text-blue-600 mb-2" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </>
              )}

              {item.type === 'quote' && (
                <>
                  <Quote className="w-6 h-6 text-purple-600 mb-2" />
                  <p className="italic text-gray-700 mb-2">{item.content}</p>
                  <p className="text-sm text-gray-500">- {item.author}</p>
                </>
              )}

              {item.type === 'milestone' && (
                <>
                  <Flag className="w-6 h-6 text-green-600 mb-2" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">Target: {item.deadline}</p>
                </>
              )}
            </div>
          ))}

          {/* Add New Item Button */}
          <button
            onClick={() => setShowAddForm(true)}
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-gray-500 hover:text-blue-500 hover:border-blue-500"
          >
            <Plus className="w-8 h-8 mb-2" />
            <span>Add New Item</span>
          </button>
        </div>

        {/* Add Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Add New Item</h3>
                <button onClick={() => setShowAddForm(false)}>
                  <XCircle className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Type</label>
                  <select
                    value={newItem.type}
                    onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="goal">Goal</option>
                    <option value="quote">Quote</option>
                    <option value="milestone">Milestone</option>
                  </select>
                </div>

                {newItem.type === 'goal' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Title</label>
                      <input
                        type="text"
                        value={newItem.title}
                        onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Description</label>
                      <textarea
                        value={newItem.description}
                        onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                        className="w-full p-2 border rounded-lg"
                        rows="3"
                      />
                    </div>
                  </>
                )}

                {newItem.type === 'quote' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Quote</label>
                      <textarea
                        value={newItem.content}
                        onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
                        className="w-full p-2 border rounded-lg"
                        rows="3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Author</label>
                      <input
                        type="text"
                        value={newItem.author}
                        onChange={(e) => setNewItem({ ...newItem, author: e.target.value })}
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                  </>
                )}

                {newItem.type === 'milestone' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Title</label>
                      <input
                        type="text"
                        value={newItem.title}
                        onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Target Date</label>
                      <input
                        type="month"
                        value={newItem.deadline}
                        onChange={(e) => setNewItem({ ...newItem, deadline: e.target.value })}
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium mb-1">Color</label>
                  <div className="flex gap-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setNewItem({ ...newItem, color })}
                        className={`w-8 h-8 rounded-full ${color} ${
                          newItem.color === color ? 'ring-2 ring-blue-500' : ''
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleAddItem}
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Item
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisionBoard;